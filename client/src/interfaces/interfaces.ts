interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  initialSobrietyDate: string;
  totalSoberDays?: number;
  newSobrietyDate?: string;
  consecutiveSoberDays?: number;
  profileImage?: string;
};

interface IResource {
  _id?: string;
  title: string;
  introText: string;
  linkToResource: string;
  imageLink: string;
  phoneNumber: number;
};

interface IJournalEntry {
  _id?: string;
  title: string;
  date: string;
  journalEntry: string;
  sobrietyMaintained: boolean;
  vibeCheck: number;
  currentDayOfSobriety: number;
}

export { IUser, IResource, IJournalEntry };