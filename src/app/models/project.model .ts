import {  commentsList } from "./commentsList.model";
import { User } from "./user.model";

export class Project {
  projectId?: number;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  amountRequired?: number;
  currentAmount?: number;
  projectStatus?: ProjectStatus;
  investementRequest?: InvestementRequest;
  investementRequests?: InvestementRequest[];
  user?: User;


  imageUrl?: string;
  listComments?: commentsList[];
  lastTwoComments?: commentsList[];

  constructor(imageUrl?: string){
    this.imageUrl = imageUrl;
  }
}


export enum ProjectStatus {
  InProgress,Completed,Canceledw
}

export interface InvestementRequest  {
  investementId?: number;
  amountInvested?: number;
  statusInv?: string; 
  projects?: Project[];
  projectList?: Project[];
  user?: User;
}


