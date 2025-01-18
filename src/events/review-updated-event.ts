import { Subjects } from "./subjects";

export interface ReviewUpdatedEvent {
  subject: Subjects.ReviewUpdated;
  data: {
    id: string;
    ticketId: string;
    reviewerId: string;
    rating: number;
    content?: string;
    version: number;
  };
}
