export interface ErrorZodType {
  issues: issues[];
  name: string;
};

interface issues {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
}
