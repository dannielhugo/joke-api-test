import { instance, getJoke } from "@/libs/api";
import moxios from "moxios";

const response = {
  id: 288,
  type: "general",
  setup: "What's the worst thing about ancient history class?",
  punchline: "The teachers tend to Babylon."
};

describe("api test", () => {
  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install(instance);
  });

  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall(instance);
  });

  it("should get jokes", async () => {
    moxios.stubRequest("https://official-joke-api.appspot.com/jokes/random", {
      status: 200,
      response
    });

    const joke = await getJoke();

    expect(joke).toBe(response);
  });
});
