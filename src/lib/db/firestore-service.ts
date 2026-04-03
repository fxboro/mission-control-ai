import { db } from './firebase-admin';
import type { 
  User, Goal, Project, Task, Decision, Playbook, Lead, Proposal, AgentRun, Memory 
} from '@/types';

// Generic CRUD Operations
export class FirestoreService<T extends { id: string; userId?: string }> {
  constructor(private collectionName: string) {}

  private getCollection() {
    return db.collection(this.collectionName);
  }

  async getById(id: string): Promise<T | null> {
    const doc = await this.getCollection().doc(id).get();
    if (!doc.exists) return null;
    return doc.data() as T;
  }

  async getAllByUserId(userId: string): Promise<T[]> {
    const snapshot = await this.getCollection()
      .where('userId', '==', userId)
      .orderBy('updatedAt', 'desc')
      .get();
    return snapshot.docs.map(doc => doc.data() as T);
  }

  async create(id: string, data: T): Promise<void> {
    await this.getCollection().doc(id).set({
      ...data,
      id,
      createdAt: data.createdAt || Date.now(),
      updatedAt: data.updatedAt || Date.now()
    });
  }

  async update(id: string, data: Partial<T>): Promise<void> {
    await this.getCollection().doc(id).update({
      ...data,
      updatedAt: Date.now()
    });
  }

  async delete(id: string): Promise<void> {
    await this.getCollection().doc(id).delete();
  }
}

// Specific Collections
export const usersService = new FirestoreService<User>('users');
export const goalsService = new FirestoreService<Goal>('goals');
export const projectsService = new FirestoreService<Project>('projects');
export const tasksService = new FirestoreService<Task>('tasks');
export const decisionsService = new FirestoreService<Decision>('decisions');
export const playbooksService = new FirestoreService<Playbook>('playbooks');
export const leadsService = new FirestoreService<Lead>('leads');
export const proposalsService = new FirestoreService<Proposal>('proposals');
export const agentRunsService = new FirestoreService<AgentRun>('agent_runs');
export const memoryService = new FirestoreService<Memory>('memory');

// Custom queries
export async function getActiveProjectsByUserId(userId: string): Promise<Project[]> {
  const snapshot = await db.collection('projects')
    .where('userId', '==', userId)
    .where('status', '==', 'active')
    .orderBy('updatedAt', 'desc')
    .get();
  return snapshot.docs.map(doc => doc.data() as Project);
}

export async function getTasksByProjectId(projectId: string): Promise<Task[]> {
  const snapshot = await db.collection('tasks')
    .where('projectId', '==', projectId)
    .orderBy('createdAt', 'desc')
    .get();
  return snapshot.docs.map(doc => doc.data() as Task);
}
