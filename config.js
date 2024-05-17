const PageFormat = {
  type: "Div",
  config: {
    style: { heigh: "200px", width: "200px" },
    attributes: { id: "parent", class: "" }
  },
  alignment: "Vertical",
  children: [
    {
      type: "Div",
      config: {
        id: "title",
        height: "200px",
        color: "yellow"
      },
      children: []
    },
    {
      type: "Div",
      alignment: "Horizontal",
      config: {},
      children: [
        {
          type: "Div",
          alignment: "Horizontal",
          config: {
            id: "h2",
            width: "6",
            height: "200px",
            color: "blue"
          },
          children: [
            {
              type: "P",
              config: {
                id: "v1",
                height: "200px",
                color: "orange"
              },
              data: { text: "this is para" },
              children: []
            },
            {
              type: "Div",
              alignment: "Horizontal",
              config: {
                id: "v2",
                height: "200px",
                color: "grey"
              },
              children: [
                {
                  type: "Span",
                  config: {
                    id: "v2",
                    height: "200px",
                    color: "grey",
                    width: "6"
                  },
                  data: {
                    text: "This is span"
                  }
                },
                {
                  type: "P",
                  config: {
                    id: "v2",
                    height: "200px",
                    color: "grey",
                    width: "6"
                  },
                  data: {
                    text: "This is paragraph"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: "Button",
      config: {
        id: "button",
        height: "200px",
        color: "yellow"
      },
      data: {
        label: "submit"
      },
      children: []
    }
  ]
};
