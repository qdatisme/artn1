# Kiểm tra bản 03 — 25/10/2026

Đã thực hiện bằng công cụ trong phiên phát triển, chưa phải nhật ký nghiệm thu thiết bị thật.

- 5 file GLB có header/độ dài hợp lệ và được trình duyệt nạp. Đã xem trực quan mèo, chó, voi, sư tử, hươu cao cổ.
- Mèo: đã kéo chuột, quan sát mô hình đổi góc, bấm Đặt lại góc. Bảng nổi đã thử Thu gọn/Mở rộng và ẩn thông tin.
- 5 ảnh QR được OpenCV giải mã đúng 1/2/3/4/5.
- AR.js thật, nguồn ảnh tĩnh (không dùng camera): 5 thẻ nhận đúng; thẻ voi quay 90 độ nhận là 3; ảnh trắng không nhận thẻ.
- Cùng một phiên AR kiểm thử: thẻ 1 -> mất dấu khoảng 1,2 giây -> 2 -> mất dấu -> 3 -> mất dấu -> 4 -> mất dấu -> 5 -> mất dấu -> 1: đúng tên/thông tin; âm thanh dừng khi mất dấu và nút trở về Nghe tiếng kêu.
- Đã kiểm tra nút phát mèo có trạng thái phát, không có lỗi giải mã báo trên giao diện. Cả 5 bản WAV đã được Python soundfile đọc kiểm tra thời lượng/mẫu dữ liệu.
- Đã phát hiện và sửa nhận nhầm do thiếu mẫu lúc khởi động và hình thẻ 3/5 quá giống nhau. Thẻ 2–5 đã có họa tiết phân biệt; bộ đếm bỏ qua marker ID -1.
- Giới hạn: đổi ảnh tức thì tại chính xác cùng một vị trí mà không có khoảng mất dấu có thể giữ ID cũ do lịch sử theo dõi của engine. Luồng hướng dẫn: đưa thẻ cũ ra ngoài khoảng 1 giây trước khi đưa thẻ mới vào.
- Chưa thực hiện với bản 03: webcam vật lý qua các khoảng cách/ánh sáng; iPhone 15 Pro Max/Safari; cảm ứng thực tế; máy in; URL HTTPS triển khai; quyền camera bị từ chối. Không ghi các mục này là đã đạt.

Các trang qa-* chỉ dùng kiểm thử bằng ảnh tĩnh và có nhãn rõ, đã tách khỏi dist để tránh dùng nhầm làm demo camera. Không dùng chúng thay cho demo trực tiếp.
