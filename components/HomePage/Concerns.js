import React from "react";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import Concern1 from "../../public/assets/concerns/Rectangle1.png";
import Concern2 from "../../public/assets/concerns/Rectangle2.png";
import Concern3 from "../../public/assets/concerns/Rectangle3.png";
const CorncernsAll = [
  { id: 1, image: Concern1 },
  { id: 2, image: Concern2 },
  { id: 3, image: Concern3 },
  { id: 4, image: Concern1 },
];

function Concerns() {
  return (
    <>
      <div className="px-10 xsm:px-5 sm:px-5">
        <div className="pb-20">
          <div className="flex flex-row">
            <div className="w-5 block xsm:hidden sm:hidden">
              <BiSquareRounded size={20} className="text-ngl_orange mt-7 " />
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                  Our Concerns
                </p>
                <p className="font-regular text-ngl_black text-base">
                  At Neocon Group, we believe in the power of synergy and
                  collaboration. By forging strategic partnerships and nurturing
                  a vibrant ecosystem, we create an environment that encourages
                  knowledge exchange, fosters creativity, and drives collective
                  progress.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1  gap-6 py-5">
                  {CorncernsAll.map((company, index) => (
                    <div key={index}>
                      <div className="broder rounded-xl border-ngl_orange">
                        <Image
                          src={company.image}
                          alt="company png"
                          className="w-auto h-auto"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Concerns;
