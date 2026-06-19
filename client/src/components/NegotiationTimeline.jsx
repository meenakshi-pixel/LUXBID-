import React from "react";

function NegotiationTimeline() {

  const history = [

    "Buyer offered ₹70,000",

    "Seller countered ₹80,000",

    "Buyer offered ₹75,000",

    "Seller accepted the deal"
  ];

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,0.08)",

        padding: "40px",

        borderRadius: "20px",

        color: "white",

        marginTop: "40px"
      }}
    >

      <h2
        style={{
          marginBottom: "30px"
        }}
      >
        Negotiation Timeline
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        {history.map((item,index)=>(

          <div
            key={index}
            style={{
              background:
                "rgba(255,255,255,0.05)",

              padding: "20px",

              borderRadius: "12px"
            }}
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
}

export default NegotiationTimeline;