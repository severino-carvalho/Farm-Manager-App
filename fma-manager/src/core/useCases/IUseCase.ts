export interface IUseCase<T> {
  execute(...args: any[]): T | Promise<T>;
}
