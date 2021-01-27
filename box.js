class box extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      box.shapeColor=color(255,27,169);
      Matter.Body.setAngle(this.body,angle);
    }
  };