import React, { FC } from "react";
import { ProductType } from "../types/types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { numberToUSD } from "../helpers/NumberToUSD";

const ProductItem: FC<ProductType> = (props) => {
  return (
    <Container>
      <Link to={`products/${props.id}`} style={{textDecoration: 'none'}}>
        <Image src={props.image} alt="" />
        <Title>{props.title}</Title>
      </Link>
      <Price>
        {numberToUSD(props.price)}
      </Price>
    </Container>
  );
};
		
export default ProductItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: clamp(0.625rem, -0.134rem + 1.58vw, 1.25rem) clamp(1.25rem, -0.269rem + 3.16vw, 2.5rem); //10-20, 20-40
	margin-bottom: 38px;

	@media screen and (min-width: 769px) {
		&:not(:nth-child(4n)) {
			&::after {
				content: '';
				position: absolute;
				top: 10%;
				right: 0;
				width: 1px;
				height: 80%;
				background-color: #D6D6D6;
			}
		}
	}

	@media screen and (max-width: 768px) {
		&:not(:nth-child(2n)) {
			&::after {
				content: '';
				position: absolute;
				top: 10%;
				right: 0;
				width: 1px;
				height: 80%;
				background-color: #D6D6D6;
			}
		}
	}
`;

const Title = styled.div`
  font-size: 16px;
	color: black;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
	
	margin-top: 16px;
	font-weight: 400;
`;

const Image = styled.img`
  width: 100%;
  height: clamp(9.375rem, 1.78rem + 15.82vw, 15.625rem); // 250 to 150
  object-fit: contain;
`;

const Price = styled.div`
  font-size: 20px;
  justify-self: flex-end;
	margin-top: 16px;
	font-weight: 500;
`;
