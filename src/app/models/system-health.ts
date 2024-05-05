export interface SystemHealth {
  components: {
    [key: string]: {
      status: string;
    };
  };
}
