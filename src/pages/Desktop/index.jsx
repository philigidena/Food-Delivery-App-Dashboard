import React from "react";

import { Text, Img, Line, CheckBox, List, Input, Button } from "components";
import { CloseSVG } from "../../assets/images";

const DesktopPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div
        className="bg-cover bg-gray_300 bg-no-repeat flex font-inter h-[1200px] items-center justify-center mx-[auto] p-[78px] sm:px-[20px] md:px-[40px] w-[100%]"
        style={{ backgroundImage: "url('images/img_desktop.png')" }}
      >
        <div className="bg-gray_100 flex items-center justify-start max-w-[1444px] mx-[auto] my-[42px] md:px-[20px] px-[2px] rounded-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[38px] items-end justify-between md:w-[100%] w-[99%]">
            <div className="h-[960px] pr-[4px] relative rounded-bl-[10px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] md:w-[100%] w-[20%]">
              <div className="bg-white_A700 h-[960px] m-[auto] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[99%]"></div>
              <div className="absolute flex flex-col h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
                <div className="md:h-[59px] h-[60px] md:ml-[0] ml-[68px] relative w-[44%]">
                  <div className="absolute h-[59px] inset-[0] justify-center m-[auto] w-[100%]">
                    <Text
                      className="m-[auto] not-italic text-black_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    ></Text>
                    <div className="absolute bottom-[25%] flex flex-row gap-[24px] items-center justify-center left-[30%] w-[35%]">
                      <div className="bg-black_900 h-[6px] rounded-[50%] w-[6px]"></div>
                      <div className="bg-black_900 h-[6px] rounded-[50%] w-[6px]"></div>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse4.svg"
                    className="absolute bottom-[0] h-[4px] right-[45%] w-[5px]"
                    alt="ellipseFour"
                  />
                  <Img
                    src="images/img_eye.svg"
                    className="absolute bottom-[0] h-[7px] left-[28%] w-[auto]"
                    alt="eye"
                  />
                </div>
                <div className="border-[1px] border-orange_A700 border-solid flex items-start justify-end mt-[59px] p-[14px] rounded-[9px] w-[100%]">
                  <div className="flex flex-row gap-[31px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[42%]">
                    <div className="flex flex-col items-center justify-start w-[22px]">
                      <Img
                        src="images/img_upload.svg"
                        className="h-[8px] w-[auto]"
                        alt="upload"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex h-[13px] items-center justify-start pt-[4px] px-[4px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group16.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start md:w-[100%] w-[8px]">
                          <Img
                            src="images/img_vector4.svg"
                            className="h-[1px] w-[auto]"
                            alt="vectorFour"
                          />
                          <Img
                            src="images/img_group16.svg"
                            className="h-[8px] w-[8px]"
                            alt="computer"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      HOME
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[20px] mt-[22px] md:w-[100%] w-[64%]">
                  <div className="flex flex-row gap-[32px] items-start justify-start w-[100%]">
                    <div className="md:h-[12px] h-[23px] relative w-[22px]">
                      <div className="h-[23px] m-[auto] w-[22px]">
                        <Img
                          src="images/img_contrast.svg"
                          className="h-[11px] mb-[-0.11px] ml-[auto] w-[11px] z-[1]"
                          alt="contrast"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[6px] mb-[undefinedpx] w-[auto] z-[1]"
                          alt="checkmark"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex h-[12px] items-end justify-start mt-[auto] mx-[auto] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group14.svg')",
                          }}
                        >
                          <Line className="bg-black_900 h-[1px] mb-[7px] mr-[6px] rotate-[-37deg] w-[4px]" />
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-start justify-start left-[41%] top-[0] w-[14%]">
                        <Img
                          src="images/img_vector2.svg"
                          className="h-[1px] w-[2px]"
                          alt="vectorTwo"
                        />
                        <Line className="bg-black_900 h-[7px] md:ml-[0] ml-[2px] mt-[3px] rotate-[-90deg] w-[1px]" />
                      </div>
                    </div>
                    <Text
                      className="font-semibold mt-[3px] text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      ORDER HISTORY
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[31px] items-center justify-start mt-[36px] md:w-[100%] w-[81%]">
                    <div className="border-[1px] border-black_900 border-solid flex flex-row items-start justify-end rounded-[4px] w-[20%]">
                      <Line className="bg-black_900 h-[1px] mb-[8px] mt-[2px] rotate-[-45deg] w-[10px]" />
                      <Line className="bg-black_900 h-[1px] mb-[7px] mt-[12px] w-[17%]" />
                      <Line className="bg-black_900 h-[1px] mb-[8px] mt-[4px] rotate-[42deg] w-[9px]" />
                    </div>
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      MESSAGES
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[31px] items-start justify-start md:ml-[0] ml-[2px] mt-[36px] md:w-[100%] w-[81%]">
                    <Img
                      src="images/img_statisticicons.svg"
                      className="h-[22px] w-[22px]"
                      alt="statisticicons"
                    />
                    <Text
                      className="font-semibold mt-[4px] text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      STATISTICS
                    </Text>
                  </div>
                  <CheckBox
                    className="font-semibold leading-[normal] mt-[37px] sm:pl-[20px] text-[12px] text-black_900 text-left"
                    inputClassName="border-[1px] border-black_900 border-solid h-[24px] mr-[5px] rounded-[4px] w-[24px]"
                    name="products"
                    id="products"
                    label="PRODUCTS"
                  ></CheckBox>
                  <div className="flex items-center justify-start mt-[35px] md:w-[100%] w-[76%]">
                    <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <List
                          className="flex-col gap-[2px] grid h-[24px] items-center w-[24px]"
                          orientation="vertical"
                        >
                          <div className="h-[7px] my-[0] relative w-[100%]">
                            <div className="absolute border-[2px] border-black_900 border-solid h-[7px] inset-y-[0] left-[17%] my-[auto] rounded-[3px] w-[7px]"></div>
                            <Line className="absolute bg-black_900 h-[3px] inset-y-[0] my-[auto] right-[0] rotate-[-180deg] w-[59%]" />
                            <Line className="absolute bg-black_900 h-[3px] inset-y-[0] left-[0] my-[auto] rotate-[-180deg] w-[21%]" />
                          </div>
                          <div className="h-[7px] my-[0] relative w-[100%]">
                            <div className="absolute border-[2px] border-black_900 border-solid h-[7px] inset-y-[0] my-[auto] right-[17%] rounded-[3px] w-[7px]"></div>
                            <Line className="absolute bg-black_900 h-[3px] inset-y-[0] left-[0] my-[auto] rotate-[-180deg] w-[59%]" />
                            <Line className="absolute bg-black_900 h-[3px] inset-y-[0] my-[auto] right-[0] rotate-[-180deg] w-[21%]" />
                          </div>
                          <div className="flex flex-row items-center justify-evenly my-[0] w-[100%]">
                            <div className="h-[7px] relative w-[46%]">
                              <div className="absolute border-[2px] border-black_900 border-solid h-[7px] inset-y-[0] my-[auto] right-[0] rounded-[3px] w-[7px]"></div>
                              <Line className="absolute bg-black_900 h-[3px] inset-y-[0] left-[0] my-[auto] rotate-[-180deg] w-[46%]" />
                            </div>
                            <Line className="bg-black_900 h-[3px] my-[2px] rotate-[-180deg] w-[55%]" />
                          </div>
                        </List>
                      </div>
                      <Text
                        className="font-semibold text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        SETTINGS
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[30px] items-start justify-start mt-[408px] md:w-[100%] w-[70%]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[23px] w-[24px]"
                      alt="arrowright"
                    />
                    <Text
                      className="font-normal mt-[3px] not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      LOGOUT
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-[0] mt-[39px] md:w-[100%] w-[78%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                wrapClassName="bg-white_A701 border-[1px] border-black_900_75 border-solid flex pl-[19px] pr-[35px] py-[13px] rounded-[11px] w-[22%]"
                className="font-normal leading-[normal] not-italic p-[0] placeholder:text-black_900 sm:pr-[20px] text-[15px] text-black_900 text-left w-[100%]"
                name="groupOne"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[19px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#000000"
                    className="cursor-pointer my-[auto]"
                    onClick={() => setInputvalue("")}
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={24}
                    width={25}
                    viewBox="0 0 25 24"
                  />
                }
              ></Input>
              <Text
                className="mt-[43px] not-italic text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Order List
              </Text>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[16px] w-[100%]">
                <Button
                  className="bg-gray_50 border-[1px] border-bluegray_300 border-solid cursor-pointer flex items-center justify-center min-w-[101px] pl-[13px] pr-[16px] py-[14px] rounded-[11px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_bluegray_300.svg"
                      className="mb-[3px] mr-[9px]"
                      alt="checkmark"
                    />
                  }
                >
                  <div className="font-normal leading-[normal] not-italic text-[16px] text-bluegray_300 text-left">
                    #345
                  </div>
                </Button>
                <div className="bg-gray_50 border-[1px] border-pink_200 border-solid flex md:flex-1 flex-row gap-[12px] items-center justify-end p-[12px] rounded-[11px] md:w-[100%] w-[auto]">
                  <Img
                    src="images/img_close.svg"
                    className="h-[18px] w-[auto]"
                    alt="close"
                  />
                  <Text
                    className="font-normal my-[2px] not-italic text-left text-pink_200 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    #346
                  </Text>
                </div>
                <Button
                  className="bg-gray_50 border-[1px] border-bluegray_300 border-solid cursor-pointer flex items-center justify-center min-w-[101px] px-[15px] py-[14px] rounded-[11px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_bluegray_300.svg"
                      className="mb-[3px] mr-[9px]"
                      alt="checkmark"
                    />
                  }
                >
                  <div className="font-normal leading-[normal] not-italic text-[16px] text-bluegray_300 text-left">
                    #347
                  </div>
                </Button>
                <Button
                  className="bg-gray_50 border-[1px] border-bluegray_300 border-solid cursor-pointer flex items-center justify-center min-w-[101px] p-[14px] rounded-[11px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_bluegray_300.svg"
                      className="mb-[3px] mr-[9px]"
                      alt="checkmark"
                    />
                  }
                >
                  <div className="font-normal leading-[normal] not-italic text-[16px] text-bluegray_300 text-left">
                    #348
                  </div>
                </Button>
                <Button
                  className="bg-gray_50 border-[1px] border-bluegray_300 border-solid cursor-pointer flex items-center justify-center min-w-[101px] p-[14px] rounded-[11px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_bluegray_300.svg"
                      className="mb-[3px] mr-[9px]"
                      alt="checkmark"
                    />
                  }
                >
                  <div className="font-normal leading-[normal] not-italic text-[16px] text-bluegray_300 text-left">
                    #349
                  </div>
                </Button>
                <List
                  className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_50 flex flex-row gap-[26px] items-center justify-start outline outline-[1px] outline-pink_200 sm:pr-[20px] pr-[30px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] w-[100%]">
                    <Line className="bg-pink_200 h-[48px] w-[4px]" />
                    <Text
                      className="font-normal not-italic text-left text-pink_200 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      #350
                    </Text>
                  </div>
                  <div className="bg-gray_50 flex flex-row gap-[26px] items-center justify-center outline outline-[1px] outline-pink_200 sm:pr-[20px] pr-[34px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] w-[100%]">
                    <Line className="bg-pink_200 h-[48px] w-[4px]" />
                    <Text
                      className="font-normal not-italic text-left text-pink_200 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      #351
                    </Text>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-[9px] grid grid-cols-2 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_50 flex flex-row gap-[26px] items-center justify-start outline outline-[1px] outline-pink_200 sm:pr-[20px] pr-[31px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] w-[100%]">
                    <Line className="bg-pink_200 h-[49px] w-[4px]" />
                    <Text
                      className="font-normal not-italic text-left text-pink_200 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      #352
                    </Text>
                  </div>
                  <div className="bg-gray_50 flex flex-row gap-[26px] items-center justify-center outline outline-[1px] outline-pink_200 sm:pr-[20px] pr-[30px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] w-[100%]">
                    <Line className="bg-pink_200 h-[49px] w-[4px]" />
                    <Text
                      className="font-normal not-italic text-left text-pink_200 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      #353
                    </Text>
                  </div>
                </List>
                <div className="bg-gray_50 flex md:flex-1 flex-row gap-[26px] items-center justify-center outline outline-[1px] outline-pink_200 sm:pr-[20px] pr-[30px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] md:w-[100%] w-[auto]">
                  <Line className="bg-pink_200 h-[48px] w-[4px]" />
                  <Text
                    className="font-normal not-italic text-left text-pink_200 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    #354
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-end mt-[41px] md:w-[100%] w-[99%]">
                <div className="md:gap-[20px] gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A701 border-[1px] border-black_900_75 border-solid flex flex-1 items-center justify-start p-[19px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #351
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <Img
                          src="images/img_image3.png"
                          className="h-[49px] md:h-[auto] rounded-[50%] w-[50px]"
                          alt="imageThree"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-between mt-[31px] w-[100%]">
                        <div className="flex flex-col gap-[40px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_images1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[81px]"
                            alt="imagesOne"
                          />
                          <Img
                            src="images/img_image1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageOne"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Vegetable Mixups
                            </Text>
                            <Text
                              className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="mt-[2px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[10px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_301 h-[1px] mt-[20px] w-[98%]" />
                      <div className="flex flex-row items-start justify-start mt-[19px] md:w-[100%] w-[99%]">
                        <Text
                          className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          X2 Items
                        </Text>
                        <div className="border-[1px] border-pink_201 border-solid flex h-[50px] items-center justify-start ml-[120px] p-[16px] rounded-[10px] w-[50px]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start w-[16px]"
                            style={{
                              backgroundImage: "url('images/img_group12.svg')",
                            }}
                          >
                            <Img
                              src="images/img_group12.svg"
                              className="h-[16px] w-[16px]"
                              alt="signal"
                            />
                          </div>
                        </div>
                        <Button className="border-[1px] border-bluegray_300 border-solid flex h-[50px] items-center justify-center ml-[20px] p-[17px] rounded-[10px] w-[50px]">
                          <Img
                            src="images/img_checkmark_bluegray_300_50x50.svg"
                            className=""
                            alt="checkmark"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A701 border-[1px] border-bluegray_400 border-solid flex flex-1 items-center justify-start p-[17px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #350
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <Img
                          src="images/img_image2.png"
                          className="h-[53px] md:h-[auto] rounded-[50%] w-[auto]"
                          alt="imageTwo"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-between mt-[30px] w-[100%]">
                        <div className="flex flex-col gap-[40px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_image8.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[81px]"
                            alt="imageEight"
                          />
                          <Img
                            src="images/img_image1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageOne"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Baked Pasted Dishes
                            </Text>
                            <Text
                              className="mt-[5px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $2.48
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="mt-[2px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[10px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_301 h-[1px] mt-[20px] w-[97%]" />
                      <div className="flex flex-row items-start justify-between mt-[19px] md:w-[100%] w-[98%]">
                        <Text
                          className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          X2 Items
                        </Text>
                        <div className="border-[1px] border-pink_201 border-solid flex flex-row gap-[10px] items-center justify-center p-[17px] rounded-[10px] w-[auto]">
                          <div
                            className="bg-cover bg-no-repeat flex h-[16px] items-center justify-start ml-[5px] w-[16px]"
                            style={{
                              backgroundImage: "url('images/img_group12.svg')",
                            }}
                          >
                            <Img
                              src="images/img_group12.svg"
                              className="h-[16px] w-[16px]"
                              alt="signal"
                            />
                          </div>
                          <Text
                            className="font-normal mr-[4px] not-italic text-left text-pink_201 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            REJECTED
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A701 border-[1px] border-bluegray_400 border-solid flex flex-1 items-center justify-start p-[17px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[4px] md:w-[100%] w-[99%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #349
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <div className="h-[53px] relative w-[19%]">
                          <Img
                            src="images/img_image2.png"
                            className="h-[53px] m-[auto] rounded-[50%] w-[100%]"
                            alt="imageSeven"
                          />
                          <Img
                            src="images/img_image4.png"
                            className="absolute bottom-[0] h-[49px] inset-x-[0] mx-[auto] rounded-[50%] w-[93%]"
                            alt="imageFour"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-between mt-[31px] w-[100%]">
                        <div className="flex flex-col gap-[41px] items-center justify-start w-[27%]">
                          <Img
                            src="images/img_image5.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                            alt="imageFive"
                          />
                          <Img
                            src="images/img_image6.png"
                            className="h-[77px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageSix"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Vegetable Mixups
                            </Text>
                            <Text
                              className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[94%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="mt-[2px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[10px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_301 h-[1px] mt-[21px] w-[98%]" />
                      <div className="flex flex-row items-start justify-between mt-[19px] md:w-[100%] w-[99%]">
                        <Text
                          className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          X2 Items
                        </Text>
                        <Button
                          className="border-[1px] border-bluegray_300 border-solid cursor-pointer flex items-center justify-center min-w-[130px] px-[15px] py-[17px] rounded-[10px] w-[auto]"
                          leftIcon={
                            <div className="mt-[1px] mb-[3px] mr-[10px] outline-bluegray_300 outline-[1px] outline">
                              <Img
                                src="images/img_checkmark_bluegray_300_50x50.svg"
                                className=""
                                alt="checkmark"
                              />
                            </div>
                          }
                        >
                          <div className="font-normal leading-[normal] not-italic text-[12px] text-bluegray_300 text-left">
                            COMPLETED
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A701 border-[1px] border-black_900_75 border-solid flex flex-1 items-center justify-start p-[19px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #348
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <Img
                          src="images/img_image3.png"
                          className="h-[49px] md:h-[auto] rounded-[50%] w-[50px]"
                          alt="imageThree"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex flex-col gap-[40px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_images1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[81px]"
                            alt="imagesOne"
                          />
                          <Img
                            src="images/img_image1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageOne"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[6px] w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Vegetable Mixups
                            </Text>
                            <Text
                              className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[76px] md:w-[100%] w-[60%]">
                              <div className="border-[1px] border-pink_201 border-solid h-[50px] rounded-[10px] w-[50px]"></div>
                              <div className="border-[1px] border-bluegray_300 border-solid h-[50px] rounded-[10px] w-[50px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A701 border-[1px] border-bluegray_400 border-solid flex flex-1 items-center justify-start p-[17px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col gap-[30px] items-center justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #347
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <Img
                          src="images/img_image2.png"
                          className="h-[53px] md:h-[auto] rounded-[50%] w-[auto]"
                          alt="imageTwo"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex flex-col gap-[40px] items-center justify-start w-[28%]">
                          <Img
                            src="images/img_image8.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[81px]"
                            alt="imageEight"
                          />
                          <Img
                            src="images/img_image1.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageOne"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Baked Pasted Dishes
                            </Text>
                            <Text
                              className="mt-[5px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $2.48
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="border-[1px] border-pink_201 border-solid h-[50px] md:ml-[0] ml-[71px] mt-[76px] rounded-[10px] w-[65%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A701 border-[1px] border-bluegray_400 border-solid flex flex-1 items-center justify-start p-[17px] rounded-[9px] w-[100%]">
                    <div className="flex flex-col gap-[31px] items-center justify-start mb-[4px] md:w-[100%] w-[99%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Order #346
                          </Text>
                          <Text
                            className="not-italic text-gray_600 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            05 Feb 2023, 08:28 PM
                          </Text>
                        </div>
                        <div className="h-[53px] relative w-[19%]">
                          <Img
                            src="images/img_image2.png"
                            className="h-[53px] m-[auto] rounded-[50%] w-[100%]"
                            alt="imageSeven"
                          />
                          <Img
                            src="images/img_image4.png"
                            className="absolute bottom-[0] h-[49px] inset-x-[0] mx-[auto] rounded-[50%] w-[93%]"
                            alt="imageFour"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex flex-col gap-[41px] items-center justify-start w-[27%]">
                          <Img
                            src="images/img_image5.png"
                            className="h-[80px] md:h-[auto] rounded-[50%] w-[80px]"
                            alt="imageFive"
                          />
                          <Img
                            src="images/img_image6.png"
                            className="h-[77px] md:h-[auto] rounded-[50%] w-[100%]"
                            alt="imageSix"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[71%]">
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Vegetable Mixups
                            </Text>
                            <Text
                              className="mt-[4px] not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Vegetable Fritters with Egg
                            </Text>
                            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[2px] mt-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $5.30
                              </Text>
                              <Text
                                className="not-italic text-black_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Qty: 1
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray_301 h-[1px] mt-[22px] w-[100%]" />
                          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[26px] md:w-[100%] w-[95%]">
                            <Text
                              className="font-normal not-italic text-black_900 text-left w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Chinese Takeout Disj
                            </Text>
                            <Text
                              className="not-italic text-gray_600 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fresh Prawn mix salad
                            </Text>
                            <div className="border-[1px] border-bluegray_300 border-solid h-[50px] md:ml-[0] ml-[71px] mt-[76px] rounded-[10px] w-[65%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
