import React, { FC } from "react";
import Coin from "public/images/Coin.svg";
import Currency from "public/images/currency.svg";
import Image from "next/image";

interface PricingProps {
  className: string;
}
declare type priceType = {
  totalDiscount: number;
  totalChapter: number;
  payChapter: number;
};

declare type totalPriceType = {
  title: string;
  subtitle: string;
  price: number;
  discount: number;
};

const basicPrice: priceType = {
  totalDiscount: 3,
  totalChapter: 7,
  payChapter: 5,
};

const totalPrice: totalPriceType = {
  title: "Total price",
  subtitle: "Instant access to all chapters • No Ad",
  price: 35,
  discount: 50,
};

const PricingAndPromotion: FC<PricingProps> = ({ className }) => {
  const _prefix = `${className}-pricing`;

  const renderContentTop = () => {
    return (
      <div className="top flex-center">
        <div className="free item">
          <div className="title">FREE</div>
          <div className="des">{basicPrice.totalDiscount} chapters</div>
        </div>
        <div className="locked item">
          <div className="title">LOCKED</div>
          <div className="des">
            <div>
              {basicPrice.totalChapter} chapters (
              <span className="price mr-4">
                <Image
                  width={12}
                  height={12}
                  alt="coin"
                  src={Coin}
                  className="mb-2"
                />
              </span>
              <span className="mr-4">{basicPrice?.payChapter}</span>
              <span className="slash mr-4">/</span> <span>chapter</span>)
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTotalPrice = () => {
    return (
      <div className="total-price mb-2">
        <div className="total-price--left">
          <p className="title mb-2">{totalPrice.title}</p>
          <p className="subtitle mb-0">{totalPrice.subtitle}</p>
        </div>
        <div className="total-price--right flex-center">
          <div className="price">
            <Image
              width={18}
              height={18}
              alt="coin"
              src={Coin}
              className="mb-4"
            />
            <span className="num ml-4">{totalPrice.price}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderSaveMoney = () => {
    if (totalPrice.discount === 0) return;
    return (
      <div className="saving">
        <div className="saving--left">
          <div className="title">
            Save money with INKR Extra
            <Image
              width={18}
              height={18}
              alt="coin"
              src={Currency}
              className="mb-6 ml-4"
            />
          </div>
          <div className="subtitle">
            Instant access to all chapters • No Ad • Extra saving
          </div>
        </div>

        <div className="saving--right">
          <div className="price flex-center">
            <div className="discount flex-center">
              <span>{totalPrice.discount}%</span>
            </div>

            <div className="new-price flex-center">
              <div className="old-price mr-4">
                <Image
                  width={18}
                  height={18}
                  alt="coin"
                  src={Coin}
                  className="mb-4 mr-4"
                />

                <span>{totalPrice.price}</span>
              </div>
              <div className="total">
                {Math.ceil(totalPrice.price * (totalPrice.discount / 100))}
              </div>
            </div>
          </div>
          <div className="warning mt-6">Saving rates may vary</div>
        </div>
      </div>
    );
  };

  return (
    <section className={_prefix}>
      <div className={`${_prefix}--title`}>Pricing & Promotion</div>
      <div className={`${_prefix}--content`}>
        {renderContentTop()}
        {renderTotalPrice()}
        {renderSaveMoney()}
      </div>
      <div className={`${_prefix}--question mt-16`}>
        Want to read for free? Learn more
      </div>
    </section>
  );
};

export default PricingAndPromotion;
