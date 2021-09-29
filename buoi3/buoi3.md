--Tạo Bảng :

Sách : 

create table tblSach (
	id int primary key  AUTO_INCREMENT,
    tenSach varchar(50) not null,
    soTrang int not null,
    namXuatBan year,
    nhaXuatBan varchar(20),
    tinhTrang varchar(20),
    viTri varchar(20)
);

Thể loại :
create table tblTheLoai(
    id int primary key  AUTO_INCREMENT,
    tenTheLoai varchar(20)
);

Thể loại và Sách có quan hệ n-n nên ta tạo bảng trung gian tblSach_TheLoai :

create table tblSach_TheLoai(
    id_sach int  not null,
    id_tloai int not null,
    FOREIGN KEY (id_sach) references tblSach(id),
    FOREIGN KEY  (id_tloai) references tblTheLoai(id)
);

Tác giả :
create table tblTacGia(
   id int primary key  AUTO_INCREMENT,
   tenTG varchar(30) not null,
   ngaySinh date ,
   queQuan text,
   moTa text
);

Tác Giả và Sách có quan hệ n-n nên ta tạo bảng trung gian tblSach_Tgia :
create table tblSach_Tgia(
   id_sach int  not null,
   id_tg  int not null,
   FOREIGN KEY (id_sach) references tblSach(id),
   FOREIGN KEY  (id_tg) references tblTacGia(id)
);

Sách có quan hệ 1 - n với tái bản nên ta có : 
create table tblTaiBan(
  id int primary key  AUTO_INCREMENT,
  id_sach int not null,
  nam  date ,
  FOREIGN KEY (id_sach) references tblSach(id)
);

Nhân Viên :
create table tblNhanVien (
   id int primary key  AUTO_INCREMENT,
   tenNV varchar(30) not null,
   ngaySinh date ,
   gioiTinh nvarchar(10) ,
   diachi text,
   sdt varchar(20),
   email varchar(30),
   avatar varchar(50)
);

Độc Giả :
create table tblDocGia (
   id int primary key  AUTO_INCREMENT,
   tenDG varchar(30) not null,
   ngaySinh date ,
   gioiTinh nvarchar(10) ,
   diachi text,
   sdt varchar(20),
   email varchar(30)
);

Phiếu mượn  được quản lý nhiều nhân viên và được mượn nhiều từ độc giả : 

create table tblPhieuMuon(
   id int primary key  AUTO_INCREMENT,
   id_DG int not null,
   id_NV int not null,
   ngayMuon datetime not null,
   ngayTra datetime not null,
   FOREIGN KEY (id_DG) references tblDocGia(id),
   FOREIGN KEY  (id_NV) references tblNhanVien(id)
);

Chi tiết phiếu mượn để biết mượn bao nhiêu sách có quan hệ 1  - n với Sách :

create table tblChitiet_Muon(
    id_phieuMuon int not null,
    id_sach int not null,
    soLuong int,
	FOREIGN KEY (id_phieuMuon) references tblPhieuMuon(id),
	FOREIGN KEY (id_sach) references tblSach(id)
);

Phiếu Trả có quan hệ 1 - 1 Phiếu Mượn :

create table tblPhieuTra(
   id int primary key  AUTO_INCREMENT,
   id_phieuMuon int not null,
   ngayTra datetime,
   FOREIGN KEY (id_phieuMuon) references tblPhieuMuon(id)
)


Diagram : 




