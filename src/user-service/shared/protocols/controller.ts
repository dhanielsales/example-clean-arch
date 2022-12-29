export interface ControllerAdapter<P, T = void> {
  handle(controller: P): T;
}
