import {
  ICreateUserRequest,
  IExistsRequest,
  IGmailRequirements,
  IGmailRequest,
  IGmailResult,
  ICreateUserResult,
  IExistsResult
} from "../../Entities/User/types";
import UserEntity from "../../Entities/User/user";
import CreateUser from "./createuser";

function Gmail(
  params: IGmailRequirements,
  exists: IExistsRequest,
  create: ICreateUserRequest
): Promise<IGmailResult> {
  return new Promise<IGmailResult>((resolveFinal, rejectFinal) => {
    const user = UserEntity({ ...params });
    let valid: string | true = true;
    if (!(user.isValidEmail === true)) {
      valid = user.isValidEmail;
    }
    if (!(user.isValidName === true)) {
      valid = user.isValidPassWord;
    }

    const UserExistsPromise = new Promise<"NOT CREATED" | IExistsResult>(
      (resolve, reject) => {
        if (valid === true) {
          exists({ email: params.email })
            .then((res) => {
              if (res.length === 0) {
                resolve("NOT CREATED");
              } else {
                resolve({ id: res[0].id });
              }
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          reject({ code: 422, message: valid });
        }
      }
    );

    const CreateUserPromise = new Promise<ICreateUserResult>(
      (resolve, reject) => {
        UserExistsPromise.then((res) => {
          if (res === "NOT CREATED") {
            CreateUser(
              {
                email: params.email,
                name: params.name,
                password: "not_accessible"
              },
              create
            )
              .then((result) => {
                resolve({ id: result.id });
              })
              .catch((err) => {
                reject(err);
              });
          } else {
            resolve({ id: res.id });
          }
        }).catch((err) => {
          reject(err);
        });
      }
    );

    Promise.all([UserExistsPromise, CreateUserPromise])
      .then((res) => {
        resolveFinal({ id: res[1].id });
      })
      .catch((err) => {
        rejectFinal(err);
      });
  });
}

export default Gmail;
