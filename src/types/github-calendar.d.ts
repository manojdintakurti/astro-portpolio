declare module 'github-calendar' {
  interface GitHubCalendarOptions {
    responsive?: boolean;
    tooltips?: boolean;
    global_stats?: boolean;
    proxy?: (username: string) => string;
    cache?: number;
  }

  function GitHubCalendar(
    selector: string,
    username: string,
    options?: GitHubCalendarOptions
  ): Promise<void>;

  export default GitHubCalendar;
}