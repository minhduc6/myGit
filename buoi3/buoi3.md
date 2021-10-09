--Tạo Bảng :

Sách : 

<img width="256" alt="sach" src="https://user-images.githubusercontent.com/72613060/135356932-0d468f87-0c25-45a4-85ec-fef64c14b8a2.png">


Thể loại :

<img width="280" alt="theloai" src="https://user-images.githubusercontent.com/72613060/135356946-69dd1c66-442c-4d65-b10a-c793fae370e8.png">


Thể loại và Sách có quan hệ n-n nên ta tạo bảng trung gian tblSach_TheLoai :

<img width="338" alt="sach_theloai" src="https://user-images.githubusercontent.com/72613060/135356958-a610092e-b05e-4ad4-a0fd-3ab91d67777b.png">


Tác giả :

<img width="272" alt="tacgia" src="https://user-images.githubusercontent.com/72613060/135356981-6866fd26-f2c0-487d-9429-75d2841527d2.png">


Tác Giả và Sách có quan hệ n-n nên ta tạo bảng trung gian tblSach_Tgia :


<img width="312" alt="tacgia_sach" src="https://user-images.githubusercontent.com/72613060/135356991-24d9466c-851d-453b-81aa-7b31ee8e74ef.png">


Sách có quan hệ 1 - n với tái bản nên ta có : 


<img width="296" alt="taiban" src="https://user-images.githubusercontent.com/72613060/135357002-e724639c-1f39-4af2-b8bc-b4ffdcf58d0e.png">

Nhân Viên :

<img width="263" alt="nhanvien" src="https://user-images.githubusercontent.com/72613060/135357014-629d6ee8-c9bc-448c-9235-fa49d6f9ebcd.png">


Độc Giả :


<img width="255" alt="docgia" src="https://user-images.githubusercontent.com/72613060/135357020-c0026b2b-0424-4531-b9ce-1ada0a2d3159.png">


Phiếu mượn  được quản lý nhiều nhân viên và được mượn nhiều từ độc giả : 

<img width="329" alt="phieumuon" src="https://user-images.githubusercontent.com/72613060/135357072-cf25f3a9-6ffe-4300-99e9-f3a0d43629fb.png">

Chi tiết phiếu mượn để biết mượn bao nhiêu sách có quan hệ 1  - n với Sách :

<img width="358" alt="chitietphieumuon" src="https://user-images.githubusercontent.com/72613060/135357085-c7a5865a-057a-44e9-a2c3-0e2a1fa80384.png">


Phiếu Trả có quan hệ 1 - 1 Phiếu Mượn :

<img width="381" alt="phieutra" src="https://user-images.githubusercontent.com/72613060/135357096-38e402b5-c0aa-43a1-abd7-739e40ae8ea2.png">


Bổ sung theo góp ý của cô :

<img width="350" alt="them" src="https://user-images.githubusercontent.com/72613060/136652975-59ffc8fe-fe3a-4096-a35a-3977169a129b.png">



Diagram : 


<img width="587" alt="dia" src="https://user-images.githubusercontent.com/72613060/135356355-adeab68d-9f01-42d5-b27d-d4cfa8737ce9.png">

insert into tbltheloai(id,tenTheLoai)
values (1,'VAN HOC');

insert into tbltheloai(id,tenTheLoai)
values (2,'KINH TE');

insert into tbltheloai(id,tenTheLoai)
values (3,'Ngoai Ngu');

insert into tbltheloai(id,tenTheLoai)
values (4,'SGK');

insert into tbltheloai(id,tenTheLoai)
values (5,'KY NANG SONG');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (1,'NHA GIA KIM' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D18');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (2,'YOUR NAME' , 216 , 2019 ,'NXB GIAO DUC' , 'DEP' ,'D19');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (3,'KINH TE VI MO' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D20');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (4,'CHUNG KHOAN' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D21');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (5,'TOEIC 450' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D18');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (6,'TOEIC 700' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D40');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (7,'TV 1' , 30 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D90');
insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (8,'TOAN 2' , 50 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D18');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (9,'DAC NHAN TAM' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D88');

insert into tblsach(id,tenSach,soTrang,namXuatBan,nhaXuatBan,tinhTrang,viTri)
values (10,'TOI TU HOC' , 200 , 2014 ,'NXB GIAO DUC' , 'DEP' ,'D8');

insert into tblsach_theloai(id_sach,id_tloai)
values (1,1);

insert into tblsach_theloai(id_sach,id_tloai)
values (2,1);

insert into tblsach_theloai(id_sach,id_tloai)
values (3,2);

insert into tblsach_theloai(id_sach,id_tloai)
values (4,2);

insert into tblsach_theloai(id_sach,id_tloai)
values (5,3);
insert into tblsach_theloai(id_sach,id_tloai)
values (6,3);

insert into tblsach_theloai(id_sach,id_tloai)
values (7,4);

insert into tblsach_theloai(id_sach,id_tloai)
values (8,4);
insert into tblsach_theloai(id_sach,id_tloai)
values (9,5);
insert into tblsach_theloai(id_sach,id_tloai)
values (10,5);

insert into tbltacgia(id,tenTG,ngaySinh,queQuan,moTa)
values (1,'Dale Carnegie','1898-06-11','ENGLAND','TL');

insert into tbltacgia(id,tenTG,ngaySinh,queQuan,moTa)
values (2,'Robin Sharma','1990-06-11','BRAZIL','TL');

insert into tbltacgia(id,tenTG,ngaySinh,queQuan,moTa)
values (3,'OLE','1996-06-11','SCOTLAND','TL');

insert into tblsach_tgia(id_sach,id_tg)
values (1,1);
insert into tblsach_tgia(id_sach,id_tg)
values (2,1);
insert into tblsach_tgia(id_sach,id_tg)
values (3,1);
insert into tblsach_tgia(id_sach,id_tg)
values (4,1);
insert into tblsach_tgia(id_sach,id_tg)
values (5,2);
insert into tblsach_tgia(id_sach,id_tg)
values (6,2);
insert into tblsach_tgia(id_sach,id_tg)
values (7,3);
insert into tblsach_tgia(id_sach,id_tg)
values (8,3);
insert into tblsach_tgia(id_sach,id_tg)
values (9,3);
insert into tblsach_tgia(id_sach,id_tg)
values (10,1);

insert into tbltaiban(id,id_sach,nam)
values (1,1,'2019-02-10');

insert into tbltaiban(id,id_sach,nam)
values (2,2,'2020-02-10');

insert into tbltaiban(id,id_sach,nam)
values (3,2,'2021-02-10');

insert into tbldocgia(id,tenDG,ngaySinh,gioiTinh,diachi,sdt,email)
values(1,'DUC','2001-11-06','NAM' ,'BACH MAI','0327415594','duc@gmail.com');

insert into tbldocgia(id,tenDG,ngaySinh,gioiTinh,diachi,sdt,email)
values(2,'TRI','2003-11-06','NAM' ,'TAY HO','0327415594','tri@gmail.com');

insert into tbldocgia(id,tenDG,ngaySinh,gioiTinh,diachi,sdt,email)
values(3,'THAO','1996-11-06','NAM' ,'GIANG VO','0327415594','thao@gmail.com');

insert into tblnhanvien(id,tenNV,ngaySinh,gioiTinh,diachi,sdt,email)
values (1,'THAI','2001-09-22','NAM' , 'LINH DAM' ,'012391231','thai@gmail.com');

insert into tblnhanvien(id,tenNV,ngaySinh,gioiTinh,diachi,sdt,email)
values (2,'DAT','2001-09-21','NAM' , 'HONG MAI' ,'012391231','dat@gmail.com');

insert into tblnhanvien(id,tenNV,ngaySinh,gioiTinh,diachi,sdt,email)
values (3,'HIEU','2001-09-22','NAM' , 'MAI DONG' ,'012391231','hieu@gmail.com');


ALTER TABLE tblphieumuon rename column ngayTra to ngayHenTra;

insert into tblphieumuon(id,id_DG,id_NV,ngayMuon,ngayHenTra)
values(1,1,1,'2021-10-01' ,'2021-10-06');

insert into tblchitiet_muon(id_phieuMuon,id_sach,soLuong)
values(1,1,2);

insert into tblphieumuon(id,id_DG,id_NV,ngayMuon,ngayHenTra)
values(2,2,1,'2021-10-01' ,'2021-10-05');

insert into tblchitiet_muon(id_phieuMuon,id_sach,soLuong)
values(2,2,3);

insert into tblphieumuon(id,id_DG,id_NV,ngayMuon,ngayHenTra)
values(3,3,3,'2021-10-01' ,'2021-10-06');

insert into tblchitiet_muon(id_phieuMuon,id_sach,soLuong)
values(3,10,2);

insert into tblphieutra(id, id_phieuMuon,ngayTra)
values(1,2,'2021-10-06');

<img width="797" alt="cau1" src="https://user-images.githubusercontent.com/72613060/136215601-15a1caae-38e3-4c4e-944d-3589da4115bf.png">

<img width="698" alt="cau2" src="https://user-images.githubusercontent.com/72613060/136215666-f321cbd8-c286-4a09-875f-f0535ab2084c.png">

<img width="458" alt="cau3" src="https://user-images.githubusercontent.com/72613060/136215731-440bd520-b46a-4981-ab21-0864906600d6.png">


<img width="532" alt="cau4 1" src="https://user-images.githubusercontent.com/72613060/136652983-10268a4a-fd94-48e2-89cb-da1624038f04.png">


