import { model } from "./model";

const run = async () => {
  const response = await model.invoke(
    `Translate "I love programming" into German.`
  );

  console.log(response);
};

run();
