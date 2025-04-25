import { InjectionToken } from "@angular/core";

export interface Config {
  apiUrl: string;
  CourseCacheSize: number;
}

export const APP_CONFIG: Config = {
    apiUrl: 'http://localhost:4200/api',
    CourseCacheSize: 100,
    };

    export const CONFIG_TOKEN = new InjectionToken<Config>('CONFIG_TOKEN', );