import { Button } from "./Button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(
      <Button
        color={"primary"}
        variant={"filled"}
        size={"small"}
        fullWidth={false}
      >
        Click
      </Button>,
    );
  });
});
