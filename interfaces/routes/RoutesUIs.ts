import express, { Router } from "express";
import http from 'http'

export interface RoutesUI {
  routes(): Router;
}
export interface StartServerUI {
    startServer(): http.Server;
}

