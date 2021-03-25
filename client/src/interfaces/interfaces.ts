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
  _id: string;
  title: string;
  introText: string;
  linkToResource: string;
  imageLink: string;
  phoneNumber: number;
};

export { IUser, IResource };