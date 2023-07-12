export interface ITodo {
  description: string;
  id: number;
  status: boolean;
}

export interface ITodoDB {
  description: string;
  status: boolean;
  system_created_at: Date;
  system_id: number;
  system_state: number;
  system_updated_at: Date;
}

export interface IICon {
  size?: number;
  strokeColor: string;
}
