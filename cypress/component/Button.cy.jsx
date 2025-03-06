import React from "react";
import { Button } from "storybook/internal/components";

describe("Button Component", () => {
  it("renders a primary button", () => {
    cy.mount(
      <Button color="primary" variant="filled" size="medium">
        Click Me
      </Button>,
    );
    cy.get("button").should("have.text", "Click Me");
  });

  it("disables the button", () => {
    cy.mount(<Button disabled>Disabled</Button>);
    cy.get("button").should("be.disabled");
  });

  it("triggers click event", () => {
    const onClick = cy.stub();
    cy.mount(<Button onClick={onClick}>Click</Button>);
    cy.get("button").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
