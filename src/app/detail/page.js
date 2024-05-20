"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import ProductCatalogRounded from "@/components/ProductCatalogRounded";
import ExpandMenu from "@/components/ExpandMenu";
import { useState } from "react";
import ModalAddToCart from "@/components/ModalAddToCart";

function ProductDetailPage() {
    const listImages = [
        {
            no: 1,
            src: "https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_2-400x400.jpg",
        },
        {
            no: 2,
            src: "https://lili.vn/wp-content/uploads/2022/07/Nhan-bac-nu-dinh-kim-cuong-Moissanite-Aidan-LILI_335168_4-400x400.jpg",
        },
        {
            no: 3,
            src: "https://lili.vn/wp-content/uploads/2022/07/Nhan-bac-nu-dinh-kim-cuong-Moissanite-Aidan-LILI_335168_4-400x400.jpg",
        },
    ];

    const [quantity, setQuantity] = useState(1);
    const [imageProduct, setImageProduct] = useState(1);
    var limitQuantity = 20;
    const quantityUp = (now) => {
        if (now < limitQuantity) {
            setQuantity((now) => now + 1);
        }
        if (now == limitQuantity) {
            setQuantity(now);
        }
    };
    const quantityDown = (now) => {
        if (now <= 1) {
            setQuantity(now);
        }
        if (now > 1) {
            setQuantity((now) => now - 1);
        }
    };
    return (
        <MaxWidthWrapper>
            <ModalAddToCart />
            {/* <div className="mx-auto w-full sm:py-12 xl:py-20 lg:py-20 max-w-screen-xl">
                <div className="border-b">breadcumb</div>

                <div className="w-full h-fit flex items-start ">
                    <div className="bg-white w-3/5 flex">
                        <div className="w-16 lg:mr-4 ">
                            {listImages.map((image) => {
                                return (
                                    <img
                                        key={image.no}
                                        className=" rounded-sm  my-2 cursor-pointer"
                                        onClick={() =>
                                            setImageProduct(image.no)
                                        }
                                        src={image.src}
                                    />
                                );
                            })}
                        </div>
                        <div className="flex-grow rounded-3xl overflow-hidden">
                            <img
                                className="w-full rounded-3xl"
                                src={listImages[imageProduct - 1].src}
                            />
                        </div>
                    </div>

                    <div className="w-2/5 pl-4 py-4 bg-white flex flex-col justify-start items-start">
                        <h2 className="font-bold text-lg border-b pb-2">
                            Title của sản phẩm
                        </h2>
                        <p className="font-semibold text-lg my-4">290.000</p>
                        <p className="font-semibold text-lg my-4">
                            chọn màu để xem giá
                        </p>
                        <div className="w-[60px] flex flex-row items-center justify-start my-4 ">
                            <img
                                className="mr-1 rounded-sm "
                                src="https://lili.vn/wp-content/uploads/2021/12/Day-chuyen-bac-nu-phong-cach-co-trang-CZ-LILI_831944_2-400x400.jpg"
                            ></img>
                            <img
                                className="mr-1 rounded-sm "
                                src="https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-Y-S925-nu-ma-bach-kim-dinh-da-CZ-hinh-trai-tim-LILI_991582_10-400x400.jpg"
                            ></img>
                        </div>

                        <div className=" min-h-[50px]">
                            <p>
                                Chi tiết sản phẩm: Bạn sẽ không chỉ thêm phần
                                xinh xắn và thanh lịch khi diện em dây chuyền
                                bạc với thiết kế cá tiên độc đáo này, mà còn thể
                                hiện gu thẩm mỹ rất riêng đấy nhé. Hãy tưởng
                                tượng bạn sẽ duyên dáng và thu hút làm sao khi
                                bạn diện chiếc vòng cổ này đi làm, đi hẹn hò hay
                                đi chơi với bạn bè. Em nó được làm từ bạc 925
                                chuyên dụng , điểm nhấn bởi những viên đá Cubic
                                Zirconia cao cấp và được chế tác hết sức tỉ mỉ
                                bởi những nghệ nhân lành nghề. Cùng em nó ra
                                ngoài và tỏa sáng thôi nào !!
                            </p>
                        </div>

                        <div className="bg-white lg:flex justify-between items-center ">
                            <div className="flex content-center items-center m-2">
                                <input
                                    className="w-[50px]  bg-slate-400 text-slate-800 rounded h-[50px] cursor-pointer"
                                    type="button"
                                    value="-"
                                    onClick={() => quantityDown(quantity)}
                                />
                                <input
                                    className="w-[100px] text-center cursor-pointer outline-none"
                                    type="text"
                                    value={quantity}
                                />
                                <input
                                    className="w-[50px] bg-slate-400 text-slate-800 rounded h-[50px] cursor-pointer"
                                    type="button"
                                    value="+"
                                    onClick={() => quantityUp(quantity)}
                                />
                            </div>
                            <Button className="ghost rounded-3xl w-1/2 text-xl m-2 bg-red-900 hover:bg-red-600">
                                Mua ngay
                            </Button>
                            <Button className="ghost rounded-3xl w-1/2 text-xl m-2 bg-gray-400 text-slate-950 hover:text-slate-200">
                                Yêu thích
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ExpandMenu header="Thông tin mô tả">
                        Trọng lượng tham khảo: 33.24794phân Hàm lượng chất liệu:
                        7500 Loại đá chính: Citrine Màu đá chính: Cam Loại đá
                        phụ: Xoàn mỹ Màu đá phụ: Trắng Số viên đá chính: 1viên
                        Số viên đá phụ: 20viên Thương hiệu: PNJ Cut (Giác cắt/
                        Hình dạng kim cương): Facet Kích thước đá (tham khảo):
                        10.0 ly Giới tính: Nam Nổi bật với sắc vàng cam nóng
                        bỏng, đá Citrine luôn mang vẻ đẹp rạng rỡ và tỏa sáng
                        khi đeo trên người. Chiếc nhẫn được chế tác từ vàng 18K
                        cùng đá Citrine, mang đến món trang sức sang trọng và
                        quý phái cho quý cô. Bên cạnh đó, trang sức đá Citrine
                        cũng khá phù hợp với nhiều lứa tuổi khác nhau, và ngự
                        trị trên làn da nào cũng toát lên được vẻ đẹp riêng
                        biệt. Ngoài ra, Citrine cũng mang nguồn năng lượng từ
                        mặt trời nên nó mang lại sự tích cực cũng như giúp cơ
                        thể tràn đầy sức sống.
                    </ExpandMenu>
                    <ExpandMenu header="Dịch vụ sau mua">
                        <div>
                            <h3>Bảo hành miễn phí 6 tháng</h3>
                            Bảo hành 6 tháng lỗi kỹ thuật, nước xi. lỗi kỹ
                            thuật, nước xi.
                            <h3>
                                Miễn phí siêu âm và đánh bóng bằng máy chuyên
                                dụng trọn đời lỗi kỹ thuật, nước xi.
                            </h3>
                            Đối với sản phẩm bị oxy hóa, xuống màu, sẽ được siêu
                            âm làm sạch bằng máy chuyên dụng (siêu âm, không xi)
                            miễn phí trọn đời tại cửa hàng.​ Miễn phí đánh bóng
                            trọn đời . Nhẫn cưới sẽ được bảo hành, làm mới, đánh
                            bóng, xi miễn phí trọn đời.​
                            <h3>
                                bóng, xi miễn phí trọn đời.​ Miễn phí thay đá CZ
                                và đá tổng hợp bóng, xi miễn phí trọn đời.​
                            </h3>
                            Miễn phí thay đá CZ và đá tổng hợp trong suốt thời
                            gian bảo hành.​​ * Không áp dụng bảo hành cho các
                            trường hợp sau:​ - Dây chuyền, lắc chế tác bị đứt
                            gãy; bị biến dạng hoặc hư hỏng nặng.​​​​​ - Khách
                            hàng cung cấp thông tin truy lục hóa đơn không chính
                            xác.​​​​​ Lưu ý: PNJ bảo hành các sản phẩm thuộc hệ
                            thống cửa hàng kênh lẻ và online của PNJ. ​​ Chế độ
                            bảo hành sản phẩm có thể thay đổi theo chính sách
                            của PNJ đối với các dòng hàng và chương trình khuyến
                            mãi vào từng thời điểm.​
                        </div>
                    </ExpandMenu>
                    <ExpandMenu header="Câu hỏi thường gặp">
                        <h3 className="text-lg">
                            Mua Online có ưu đãi gì đặc biệt cho tôi?
                        </h3>
                        <ul>
                            PNJ mang đến nhiều trải nghiệm mua sắm hiện đại khi
                            mua Online:
                            <li>
                                - Ưu đãi độc quyền Online với hình thức thanh
                                toán đa dạng.
                            </li>
                            <li> - Đặt giữ hàng Online, nhận tại cửa hàng.</li>
                            <li>
                                - Miễn phí giao hàng từ 1-7 ngày trên toàn quốc
                                và giao hàng trong 3 giờ tại một số khu vực
                                trung tâm với các sản phẩm có gắn nhãn .
                            </li>
                            <li>
                                - Trả góp 0% lãi suất với đơn hàng từ 3 triệu.
                            </li>
                            <li>
                                - Làm sạch trang sức trọn đời, khắc tên miễn phí
                                theo yêu cầu (tùy kết cấu sản phẩm) và chính
                                sách bảo hành, đổi trả dễ dàng tại hệ thống PNJ
                                trên toàn quốc. PNJ hân hạnh phục vụ quý khách
                                qua Hotline 1800 5454 57 (08:00-21:00, miễn phí
                                cuộc gọi).
                            </li>
                        </ul>
                        <h3 className="text-lg">
                            PNJ có thu mua lại trang sức không?
                        </h3>{" "}
                        PNJ có dịch vụ thu đổi trang sức PNJ tại hệ thống cửa
                        hàng trên toàn quốc. Chi tiết xem tại:
                        https://www.pnj.com.vn/chinh-sach-bao-hanh-va-thu-doi.html
                        <h3 className="text-lg">
                            Nếu đặt mua Online mà sản phẩm không đeo vừa thì có
                            được đổi không?
                        </h3>
                        PNJ có chính sách thu đổi trang sức vàng trong vòng 48
                        giờ, đổi ni/ size trang sức bạc trong vòng 72 giờ. Quý
                        khách sẽ được áp dụng đổi trên hệ thống PNJ toàn quốc.
                        <h3 className="text-lg">
                            Sản phẩm đeo lâu có xỉn màu không, bảo hành như thế
                            nào?
                        </h3>
                        Do tính chất hóa học, sản phẩm có khả năng oxy hóa,
                        xuống màu. PNJ có chính sách bảo hành miễn phí về lỗi kỹ
                        thuật, nước xi: - Trang sức vàng: 6 tháng. - Trang sức
                        bạc: 3 tháng. Ngoài ra, PNJ cũng cung cấp dịch vụ siêu
                        âm làm sạch bằng máy chuyên dụng (siêu âm, không xi)
                        miễn phí trọn đời tại hệ thống cửa hàng.
                        <h3 className="text-lg">
                            Tôi muốn xem trực tiếp, cửa hàng nào còn hàng?
                        </h3>
                        Với hệ thống cửa hàng trải rộng khắp toàn quốc, quý
                        khách vui lòng liên hệ Hotline 1800 5454 57
                        (08:00-21:00, miễn phí cuộc gọi) để kiểm tra cửa hàng
                        còn hàng và tư vấn chương trình khuyến mãi Online trước
                        khi đến cửa hàng.
                    </ExpandMenu>
                </div>
                <div> đánh giá sản phẩm</div>
                <div className="mt-8">
                    <ProductCatalogRounded
                        size="w-60"
                        title="Có thể bạn sẽ thích"
                    ></ProductCatalogRounded>
                </div>
            </div> */}
        </MaxWidthWrapper>
    );
}
export default ProductDetailPage;
