import React from "react";
import Image from "next/image";
import Concern1 from "../../public/assets/concerns/Rectangle1.png";
import Concern2 from "../../public/assets/concerns/Rectangle2.png";
import Concern3 from "../../public/assets/concerns/Rectangle3.png";
import Concern4 from "../../public/assets/concerns/Rectangle4.png";
import Concern5 from "../../public/assets/concerns/Rectangle5.png";
const CorncernsAll = [
  { id: 1, image: Concern1 },
  { id: 2, image: Concern2 },
  { id: 3, image: Concern3 },
  { id: 4, image: Concern4 },
  { id: 5, image: Concern5 },
];

function Business() {
  return (
    <>
      <div>
        <div className="pt-20">
          <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1  gap-6 py-5">
            {CorncernsAll.map((company, index) => (
              <div key={index}>
                <div>
                  <Image
                    src={company.image}
                    alt="company png"
                    className="w-auto  h-full rounded-3xl border-2 border-ngl_orange "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
