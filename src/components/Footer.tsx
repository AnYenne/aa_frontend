import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

const footerApi = [
    {
        id: 1,
        title: "VỀ A&A",
        name: "VỀ A&A",
        contents: [
            "Câu chuyện A&A",
            "Tuyển dụng ",
            " Xuất khẩu",
            "Kinh doanh sỉ",
            "Kiểm định kim cương",
            "Kinh doanh vàng miếng",
        ],
    },
    {
        id: 1,
        title: " CHĂM SÓC KHÁCH HÀNG",
        name: " CHĂM SÓC KHÁCH HÀNG",
        contents: [
            "Hướng dẫn đo size trang sức",
            "Mua hàng trả góp",
            "Hướng dẫn mua hàng và thanh toán",
            "Cẩm nang sử dụng trang sức",
            "Câu hỏi thường gặp",
        ],
    },
    {
        id: 1,
        title: "CHÍNH SÁCH",
        name: "CHÍNH SÁCH",
        contents: [
            "Chính sách hoàn tiền",
            "Chính sách giao hàng",
            "Chính sách bảo hành thu đổi",
            "Chính sách khách hàng thân thiết",
            "Chính sách bảo mật thông tin khách hàng",
            "Chính sách xử lý dữ liệu cá nhân",
        ],
    },
    {
        id: 1,
        title: "KẾT NỐI VỚI CHÚNG TÔI",
        name: "KẾT NỐI VỚI CHÚNG TÔI",
        contents: ["facebook", "instagram", "youtube", "email"],
    },
    {
        id: 1,
        title: "Thanh toán",
        name: "Thanh toán",
        contents: [
            "thanh toán 1",
            "thanh toán 2",
            "thanh toán 3",
            "thanh toán 4",
            "thanh toán 5",
            "thanh toán 6",
        ],
    },
    {
        id: 1,
        title: "",
        name: "",
        contents: [
            " © 2017 Công Ty Cổ Phần A&A 170E Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.Hồ Chí Minh ĐT: 030000000 - Fax: 02800212122 ",
        ],
    },
    // {
    //     name: "logo",
    //     content: [
    //         {
    //             alt: "logo",
    //             src: "https://cdn.pnj.io/images/logo/pnj.com.vn.png",
    //         },
    //     ],
    // },
];

const Footer = () => {
    return (
        <MaxWidthWrapper>
            <div className="mt-10 pt-6 border-t-2 ">
                <div
                    className={cn(
                        `bg-white grid grid-cols-3 grid-rows-1 h-fit `
                    )}
                >
                    <div className="">
                        <p className="text-yellow-900 m-2 uppercase font-medium row-span-1 col-start-1 col-span-2">
                            CHĂM SÓC KHÁCH HÀNG
                        </p>
                        <ul>
                            <li className="m-2 ">
                                Hướng dẫn đo size trang sức
                            </li>
                            <li className="m-2 ">Mua hàng trả góp</li>
                            <li className="m-2 ">
                                Hướng dẫn mua hàng và thanh toán
                            </li>
                            <li className="m-2 ">Cẩm nang sử dụng trang sức</li>
                            <li className="m-2 ">Câu hỏi thường gặp</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-yellow-900 m-2 uppercase font-medium  row-span-1 col-start-2 col-span-3">
                            Chính sách
                        </p>
                        <ul>
                            <li className="m-2">Chính sách hoàn tiền </li>
                            <li className="m-2">Chính sách giao hàng</li>
                            <li className="m-2">Chính sách bảo hành thu đổi</li>
                            <li className="m-2">
                                Chính sách khách hàng thân thiết{" "}
                            </li>
                            <li className="m-2">
                                Chính sách bảo mật thông tin khách hàng{" "}
                            </li>
                            <li className="m-2">
                                Chính sách xử lý dữ liệu cá nhân
                            </li>
                        </ul>
                    </div>
                    <div className=" col-start-1 col-span-2 row-span-3 row-start-2 mt-4 ">
                        <p className="text-yellow-900 m-2 uppercase font-medium">
                            Kết nối với chúng tôi
                        </p>
                        <ul className="flex flex-row items-center justify-between">
                            <li className="m-2">facebook</li>
                            <li className="m-2">instagram</li>
                            <li className="m-2">youtube</li>
                            <li className="m-2">email</li>
                        </ul>
                    </div>
                    <div className="col-start-4 col-span-5 m-8 ">
                        <p className="text-yellow-900 uppercase font-medium">
                            Liên hệ:
                        </p>
                        <ul className="flex">
                            <li className="mr-2 mt-2 ">084291666</li>
                            <li className="mr-2  mt-2">dev@aa.code.com</li>
                        </ul>
                    </div>
                    <img
                        className="col-start-4 col-span-5 row-start-1"
                        alt="logo"
                        src="https://cdn.pnj.io/images/logo/pnj.com.vn.png"
                    ></img>
                </div>
                <div className="w-full ">
                    <p className="text-yellow-900 text-center uppercase font-medium w-full">
                        © 2017 Công Ty Cổ Phần A&A 170E Phan Đăng Lưu, P.3,
                        Q.Phú Nhuận, TP.Hồ Chí Minh
                    </p>
                    <p className="text-yellow-900 text-center uppercase font-medium w-full">
                        ĐT: 030000000 - Fax: 02800212122
                    </p>
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default Footer;
