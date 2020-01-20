const controller = require('./controller');

test('get random number greater than 0', () => {
    const value = controller.randomPrice(1, 10);
    expect(value).toBeGreaterThan(0);
});

test('get random number less than 10', () => {
    const value = controller.randomPrice(1, 10);
    expect(value).toBeLessThan(10);
});

test('product_1 should has name', () => {
    const product = controller.product_1();
    expect(product.name).not.toBeNull();
});

test('product_1 price returns NaN', () => {
    const product = controller.product_1();
    expect(product.price).toBeNaN();
});

test('product_2 should has name', () => {
    const product = controller.product_2();
    expect(product.name).not.toBeNull();
});

test('product_2 price returns NaN', () => {
    const product = controller.product_2();
    expect(product.price).toBeNaN();
});

test('product_3 should has name', () => {
    const product = controller.product_3();
    expect(product.name).not.toBeNull();
});

test('product_3 price returns 12.67', () => {
    const product = controller.product_3();
    expect(product.price).toBe(12.67);
});

test('product_4 should has name', () => {
    const product = controller.product_4();
    expect(product.name).not.toBeNull();
});

test('product_4 price returns NaN', () => {
    const product = controller.product_4();
    expect(product.price).toBeNaN();
});

test('product_5 should has name', () => {
    const product = controller.product_5();
    expect(product.name).not.toBeNull();
});

test('product_5 price returns NaN', () => {
    const product = controller.product_5();
    expect(product.price).toBeNaN();
});

test('product_6 should has name', () => {
    const product = controller.product_6();
    expect(product.name).not.toBeNull();
});

test('product_6 price returns NaN', () => {
    const product = controller.product_6();
    expect(product.price).toBeNaN();
});