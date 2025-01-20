import { Subjects } from "./subjects";

export interface ReviewCreatedEvent {
  subject: Subjects.ReviewCreated;
  data: {
    id: string;
    ticketId: string;
    reviewerId: string;
    rating: number;
    content?: string;
  };
}
