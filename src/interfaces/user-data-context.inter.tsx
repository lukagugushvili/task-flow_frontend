export interface IUserDataContext {
  userName: string | null;
  setUserName: React.Dispatch<React.SetStateAction<string | null>>;
}
