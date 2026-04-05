import { db } from "../firebase/admin";
import { z } from "zod";

export class BaseService<T extends { id?: string; userId?: string; createdAt?: number; updatedAt?: number }> {
  constructor(
    protected collectionName: string,
    protected schema?: z.ZodSchema<T>
  ) {}

  protected get collection() {
    return db.collection(this.collectionName);
  }

  async getById(id: string): Promise<T | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return doc.data() as T;
  }

  async listByUser(userId: string): Promise<T[]> {
    const snapshot = await this.collection
      .where("userId", "==", userId)
      .orderBy("updatedAt", "desc")
      .get();
    return snapshot.docs.map((doc) => doc.data() as T);
  }

  async create(id: string, data: Partial<T> & { userId: string }): Promise<void> {
    const now = Date.now();
    const payload = {
      ...data,
      id,
      createdAt: data.createdAt ?? now,
      updatedAt: data.updatedAt ?? now,
    };

    if (this.schema) {
      this.schema.parse(payload);
    }

    await this.collection.doc(id).set(payload);
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    const payload = {
      ...data,
      updatedAt: Date.now(),
    };

    // For partial updates, we do a relaxed parsing if possible
    if (this.schema && typeof (this.schema as any).partial === "function") {
      (this.schema as any).partial().parse(payload);
    }

    await this.collection.doc(id).update(payload);
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
