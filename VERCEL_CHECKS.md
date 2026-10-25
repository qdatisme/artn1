# Kiểm tra cấu hình Vercel

- Các trường đang dùng trong vercel.json đã được xác thực theo phần tương ứng của schema chính thức Vercel.
- Output dist có index.html ở cấp đầu.
- Đủ 60 file static, gồm 5 GLB, 5 pattern và 5 WAV.
- Hash từng file trong dist giữ nguyên bản 03; không sửa chức năng AR trong bản cấu hình này.
- Chưa triển khai lên Vercel thực tế; cần kiểm tra URL, headers và camera Safari sau Deploy theo DEPLOY_VERCEL.md.
