import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  test("should have 10 products from data source", () => {
    const testAppComponent = shallow(<App />);
    const productItemComponents = testAppComponent.find("ProductItem");
    expect(productItemComponents).toHaveLength(10);
  });
});
