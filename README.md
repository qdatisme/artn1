# Animal AR — bản cấu hình Vercel

Đây là project static HTML/JS. Mở hướng dẫn DEPLOY_VERCEL.md trước khi triển khai. File vercel.json ở thư mục gốc chỉ định outputDirectory=dist; không cần npm install hoặc build.

Chạy trên laptop: nhấp đúp Start_AR.cmd hoặc dùng py run.py.

Thẻ và 5 mô hình giữ nguyên bản 03; chỉ bổ sung cấu hình triển khai. Chưa có deployment Vercel được xác minh.

# Hướng dẫn sử dụng bản 03

## Chạy nhanh
1. Giải nén toàn bộ file ZIP vào thư mục riêng, không chạy bên trong ZIP.
2. Nhấp đúp Start_AR.cmd. Cần Python 3 đã cài.
3. Giữ cửa sổ máy chủ mở. Trình duyệt sẽ mở http://127.0.0.1:8080/.
4. Chọn Mở bộ 5 thẻ; tải ảnh thẻ sang điện thoại hoặc in nguyên ảnh.
5. Trên laptop chọn Mở camera AR, cho phép webcam. Đưa thẻ vào khung hình.
6. Kéo chuột hoặc vuốt ngang vùng camera để xoay. Dùng Đặt lại góc, Thu gọn và Nghe tiếng kêu.
7. Khi đổi thẻ: đưa thẻ cũ ra khỏi khung hình, chờ mô hình ẩn rồi đưa thẻ mới vào. Tránh để nhiều thẻ trong hình cùng lúc.
8. Dừng máy chủ bằng Ctrl+C.

Lệnh thay thế: py run.py hoặc python run.py.
Nếu cổng 8080 đã được bản cũ dùng: tắt Terminal cũ bằng Ctrl+C, hoặc chạy py run.py --port 8081.
Nếu trình duyệt giữ bản cũ: Ctrl+F5. Không mở địa chỉ [::]:8080.

Có thể dùng lệnh cũ: py -m http.server 8080 --bind 127.0.0.1 --directory dist

## Bộ thẻ
1 mèo; 2 chó; 3 voi châu Phi; 4 sư tử; 5 hươu cao cổ.
Thẻ 1 giữ hình QR cũ. Thẻ 2–5 có họa tiết đen trắng riêng giúp tránh nhận lẫn; nội dung QR vẫn là số tương ứng. QR bất kỳ khác chứa cùng số không thay thế được thẻ trong bộ.
Ứng dụng theo dõi mẫu hình ảnh của thẻ, không giải mã số QR từ camera để suy luận con vật.
In nguyên ảnh, giữ viền đen và vùng trắng. Thử khoảng cách 25 và 50 cm; đây là điểm kiểm thử chứ không phải cam kết mọi camera đều nhận được.

## Thay đổi
- 5 mô hình GLB cục bộ có chất liệu; mèo Bicolor Cat của kenchoo có vân lông. Dùng tư thế tĩnh, chưa tích hợp chuyển động xương.
- Tự căn kích thước và chân lên mặt thẻ, cho phép xoay quanh trục đứng của thẻ.
- 5 bản ghi tiếng kêu thật, nút dừng âm; dừng khi mất hoặc đổi thẻ.
- Thông tin và môi trường sống nằm trong bảng nổi có thể thu gọn.
- Trang Xem mô hình 3D không dùng camera, chỉ để xem asset. Không dùng trang này thay demo AR.
- Thư viện và phông chữ đã có trong dist/vendor. Chạy trên laptop không cần tải các thư viện từ CDN.
- Chờ đủ mẫu được nạp và xác nhận nhận diện ổn định 180 ms; ngưỡng tin cậy 0.8.

## Giới hạn cần khai báo
- Bản 03 chưa được kiểm thử bằng camera thực tế của iPhone 15 Pro Max. Chưa có URL HTTPS đã triển khai.
- Muốn iPhone làm thiết bị quét, cần phục vụ dist qua HTTPS; localhost trên iPhone không trỏ tới laptop. Không cần Unity/Xcode cho bản WebAR này. Nếu giảng viên bắt buộc Unity/C#, phải xác nhận lại hướng WebAR.
- Mô hình minh họa, không phải ảnh chụp hoặc dữ liệu giải phẫu. Mèo có texture lông; không cam kết tất cả mô hình đạt độ chân thật như ảnh.
- File tiếng voi là bản ghi voi châu Á, minh họa họ voi; mô hình là voi châu Phi. Cần thay âm đúng loài nếu yêu cầu báo cáo phải khớp loài chính xác.
- Khi có nhiều thẻ, giữ con vật hiện tại tới khi thẻ đó mất dấu. Không trình diễn nhận diện đồng thời nhiều con.
- Báo cáo, slide, nhật ký kiểm thử thiết bị và bản HTTPS chưa nằm trong gói này.

## Nguồn và giấy phép
Xem dist/credits.html và các file assets/model-sources.json, assets/sound-sources.json.
Mèo: Bicolor Cat © kenchoo, CC BY 4.0, https://sketchfab.com/3d-models/bicolor-cat-e623a618ca344a8393d7ba4d63ec23cf. Bản sao GLB từ https://github.com/code4fukui/vr-cats. Giữ ghi công khi phân phối.
Chó: Innerscene, CC0. Voi/sư tử/hươu: 3DAssets.dev, CC0; nhà cung cấp khai báo dùng AI để tạo các mô hình này.
Âm thanh mèo/sư tử: Public domain; voi: CC0; chó: Amada44, CC BY-SA 3.0; hươu: Anton Baotic, Florian Sicks, Angela S. Stoeger, CC BY-SA 4.0. Bản WAV được đổi định dạng từ Ogg, giữ giấy phép nguồn. Bản ghi Ogg gốc cũng đi kèm.
A-Frame 1.6.0 MIT: https://github.com/aframevr/aframe/tree/v1.6.0
AR.js 3.4.7 MIT: https://github.com/AR-js-org/AR.js/tree/3.4.7
Thành phần ARToolKit LGPLv3 kèm ngoại lệ liên kết: https://github.com/artoolkitx/jsartoolkit5; văn bản trong vendor/ARTOOLKIT-LICENSE.
qrcode-generator 1.4.4 MIT: https://github.com/kazuhikoarase/qrcode-generator
Be Vietnam Pro SIL OFL: https://github.com/bettergui/BeVietnamPro
Giữ các giấy phép và đường dẫn nguồn khi chia sẻ project. Thay đổi thư viện thì cần giữ nguồn tương ứng; không xóa các thông báo upstream.

## Kiểm thử để nộp
Ghi thiết bị/OS/trình duyệt, ánh sáng, khoảng cách, kết quả thực tế và ảnh minh chứng. Không ghi các bước chưa chạy là đã đạt.
- Mỗi thẻ đúng -> đúng mô hình, thông tin và âm thanh.
- Thẻ sai/khung trắng -> không hiện động vật.
- Mất thẻ rồi đưa lại -> ẩn và hiện lại, âm thanh dừng khi mất thẻ.
- Đổi thẻ, lặp lại 3 lần; thử 25 và 50 cm.
- Kéo xoay, đặt lại góc, thu gọn/mở rộng; thử dọc và ngang.
- Từ chối quyền camera và phục hồi quyền rồi tải lại.

Mã chọn con vật truy cập trạng thái raw tracking trong AR.js 3.4.7 đã ghim phiên bản; nếu nâng AR.js phải kiểm tra lại API nội bộ này.
