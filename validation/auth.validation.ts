import { object, string } from "zod";

export const signupSchema = object({
  name: string().min(1, {
    message: "Name is required",
  }),
  email: string()
    .email({
      message: "Please enter a valid email adress",
    })
    .min(1, {
      message: "Email is required",
    }),
  shopName: string().min(2, {
    message: "Shop name is required",
  }),
  password: string().min(1, {
    message: "Password is required",
  }),
});

export const loginSchema = object({
  name: string().min(1, {
    message: "Name is required",
  }),
  email: string()
    .email({
      message: "Please enter a valid email adress",
    })
    .min(1, {
      message: "Email is required",
    }),
  shopName: string().min(2, {
    message: "Shop name is required",
  }),
  password: string().min(1, {
    message: "Password is required",
  }),
});
