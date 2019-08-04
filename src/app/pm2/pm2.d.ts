export interface Pm2Data {
    Memory: memory;
    processes: process[];
}

export interface memory {
    free_mem: number;
    total_mem: number;
}

export interface process {
    HTTP?: Object;
    activeHandles?: Object;
    activeRequests?: Object;
    axm_actions?: any;
    loopDelay?: Object;
    monit?: Object;
    name: string;
    pm_id: number;
    restart_time: number;
    username: string;
}
