import { db } from "../firebase/admin";
import { UserSchemaType, userSchema } from "../validators";

export class UserService {
  private collection = db.collection("users");

  async getByUid(uid: string): Promise<UserSchemaType | null> {
    const doc = await this.collection.doc(uid).get();
    if (!doc.exists) return null;
    return doc.data() as UserSchemaType;
  }

  async createOrUpdate(uid: string, data: Partial<UserSchemaType>): Promise<void> {
    const now = Date.now();
    
    const doc = await this.collection.doc(uid).get();
    let payload;

    if (!doc.exists) {
      payload = {
        ...data,
        uid,
        createdAt: now,
      };
      
      // Strict parse on creation
      userSchema.parse(payload);
      
      await this.collection.doc(uid).set(payload);
    } else {
      payload = {
        ...data,
      };
      
      // Partial parse on update
      userSchema.partial().parse(payload);
      
      await this.collection.doc(uid).update(payload);
    }
  }
}

export const userService = new UserService();
