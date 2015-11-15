-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-09-29 16:08:31
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidu_news`
--

-- --------------------------------------------------------

--
-- 表的结构 `allin`
--

CREATE TABLE IF NOT EXISTS `allin` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `allin`
--

INSERT INTO `allin` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '中美互联网：市场是朋友 厉害是关键', './img/allin/1.jpg', '25分钟前', NULL, 'http://taoduanfang.baijia.baidu.com/article/177987'),
(2, '专利优势不能保证华为手机成为未来赢家', './img/allin/2.jpg', '1小时前', NULL, 'http://baiming.baijia.baidu.com/article/178014'),
(3, '阿里双主场天猫电器大促 谁在颤抖？', './img/allin/3.jpg', '1小时前', NULL, 'http://laotie.baijia.baidu.com/article/177968'),
(4, '为什么iOS可能会成为新一代的企业操作系统？', './img/allin/4.jpg', '2小时前', NULL, 'http://junstapo.baijia.baidu.com/article/177939'),
(5, '在2015年移动分发的此时此刻，我怎么做免费推广', './img/allin/5.jpg', '2小时前', NULL, 'http://gupowang.baijia.baidu.com/article/177747'),
(6, '《九层妖塔》：添好油加好醋', './img/allin/6.jpg', '3小时前', NULL, 'http://mantuner.baijia.baidu.com/article/177924'),
(7, '港囧：徐峥拍了一部《少年包贝尔的奇幻漂流》吗？', './img/allin/7.jpg', '1小时前', NULL, 'http://yangshiyang.baijia.baidu.com/article/178914');

-- --------------------------------------------------------

--
-- 表的结构 `entertainment`
--

CREATE TABLE IF NOT EXISTS `entertainment` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `entertainment`
--

INSERT INTO `entertainment` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '23:30看《真心英雄》 赵薇徐峥港囧成真囧', './img/entertainment/1.jpg', '6分钟前', NULL, 'http://3g.k.sohu.com/t/n71222628'),
(2, '刘亦菲转发侧颜照 网友被美哭', './img/entertainment/2.jpg', '14分钟前', NULL, 'http://ent.163.com/15/0925/10/B4BOE01200031H2L.html'),
(3, '《好声音》汪峰庾澄庆场 “导师对战”上演', './img/entertainment/3.jpg', '1小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymu0839643-comos-ent-cms&fromsinago=1&page_start=1&page_end=100'),
(4, '陈学冬回应与小四捆绑：有宣传价值即合理', './img/entertainment/4.jpg', '1小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymv7601705-comos-ent-cms&fromsinago=1&page_start=1&page_end=100'),
(5, '陈伟霆懒理分手 蒙面置身沙漠', './img/entertainment/5.jpg', '2小时前', NULL, 'http://view.inews.qq.com/a/ENT2015092501256905'),
(6, '李晨否认范冰冰息影 默认计划明年结婚', './img/entertainment/6.jpg', '3小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieyms4068419-comos-ent-cms&fromsinago=1&page_start=1&page_end=100'),
(7, '陈妍希曝求爱经过:收表白信息', './img/entertainment/7.jpg', '3小时前', NULL, 'http://ent.163.com/15/0925/10/B4BOLTV400031H2L.html');

-- --------------------------------------------------------

--
-- 表的结构 `internet`
--

CREATE TABLE IF NOT EXISTS `internet` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `internet`
--

INSERT INTO `internet` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '创业路上如何找到合适的伙伴，“极速合伙人”来帮你', './img/internet/1.jpg', '9分钟前', NULL, 'http://www.36kr.com/p/5037810.html'),
(2, 'BAT即将上演的O2O争霸赛，都是怎样的打法？', './img/internet/2.jpg', '9分钟前', NULL, 'http://www.tmtpost.com/1441505.html'),
(3, '互联网金融周报：蚂蚁金服增资控股国泰产险', './img/internet/3.jpg', '9分钟前', NULL, 'http://www.huxiu.com/article/126878/1.html?f=index_feed_article'),
(4, '李克强考察跨境电商 现场掏200元买英文书(图)', './img/internet/4.jpg', '21分钟前', NULL, 'http://tech.sina.com.cn/i/2015-09-25/doc-ifxieyms4073610.shtml'),
(5, '《财富》最受赞赏中国公司：阿里百度华为蝉联前三', './img/internet/5.jpg', '1小时前', NULL, 'http://www.techweb.com.cn/internet/2015-09-25/2207089.shtml'),
(6, '利用人工智能和大数据对主观题智能阅卷还有多远？', './img/internet/6.jpg', '1小时前', NULL, 'http://www.tmtpost.com/1441517.html'),
(7, '用户即算法，知乎这次站在了今日头条的对面', './img/internet/7.jpg', '1小时前', NULL, 'http://www.huxiu.com/article/126891/1.html?f=index_headlines');

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE IF NOT EXISTS `local` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_main` varchar(255) NOT NULL COMMENT '主要内容',
  `news_image` varchar(500) DEFAULT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) NOT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`news_id`, `news_title`, `news_main`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '北京将新增40亿债券额度 用于新机场征地拆迁', '北京新航城控股有限公司联合榆垡镇政府、礼贤镇政府向社会公开征集新机场安置房名称。', NULL, '11分钟前', '证券之星', 'http://finance.stockstar.com/JC2015092500002172.shtml'),
(2, '河北曹妃甸示范区5至15年内实现与北京同城化发展', '对接北京企业达160余家。', NULL, '1小时前', '中国证券报', 'http://www.cs.com.cn/ssgs/hyzx/201509/t20150925_4807091.html'),
(3, '12岁孤儿吃包谷住草棚 梦想到北京上大学', '个子也不高，看上去和城市里6、7岁的孩子差不多。', NULL, '2分钟前', '金融界', 'http://finance.jrj.com.cn/2015/09/25144119866758.shtml'),
(4, '中秋公园赏月 北京公交增加晚间20点至22点运力', '为了方便市民外出赏月，公交集团将重点增加途经这些地区的118路、103路、5路等公交线路晚间2...', NULL, '1分钟前', '千龙网', 'http://beijing.qianlong.com/3825/2015/09/25/8325@10532401.htm'),
(5, '北京联通iPhone 6s开售 可24期免息购机', '联通版iPhone6s/6sPlus还支持4GLTEAdvanced技术，通过中国联通正在大力...', NULL, '1小时前', '中关村在线', 'http://m.zol.com.cn/article/5433624.html'),
(6, '北京众创空间再扩容 多模式服务创业者', '作为国内创业服务模式创新最为活跃的地区，北京市再次扩大“众创空间”服务机构名录，总数已经达到65家。', NULL, '19分钟前', '新浪科技', 'http://tech.sina.com.cn/i/2015-09-25/doc-ifxieymv7629094.shtml');

-- --------------------------------------------------------

--
-- 表的结构 `military`
--

CREATE TABLE IF NOT EXISTS `military` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `military`
--

INSERT INTO `military` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '俄专家：长征6号造价便宜 对俄火箭有严重威胁', './img/military/1.jpg', '1小时前', NULL, 'http://i.ifeng.com/news?aid=101599908'),
(2, '金正恩史无前例向全体军民发奖 约一月工资', './img/military/2.jpg', '1小时前', NULL, 'http://3g.k.sohu.com/t/n71262661'),
(3, '国防部:裁军30万将分步实施 2017年底基本完成', './img/military/3.jpg', '1小时前', NULL, 'http://i.ifeng.com/news?aid=101603063'),
(4, '中国最新093B核潜艇装垂发系统 可狙杀美航母', './img/military/4.jpg', '1小时前', NULL, 'http://i.ifeng.com/news?aid=101621683'),
(5, '产油大国争抢中国市场 伊拉克挤掉俄罗斯居第三', './img/military/5.jpg', '1小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieynu2269760-comos-mil-cms&fromsinago=1&page_start=1&page_end=100'),
(6, '国防部回应中国军舰进美国领海：享有过境通行权', './img/military/6.jpg', '2小时前', NULL, 'http://i.ifeng.com/news?aid=101619102'),
(7, '少将：美国想做霸主会遏制华 中国大搞南海演习', './img/military/7.jpg', '2小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxiehns3233319-comos-mil-cms&fromsinago=1&page_start=1&page_end=100');

-- --------------------------------------------------------

--
-- 表的结构 `picture`
--

CREATE TABLE IF NOT EXISTS `picture` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_like` int(11) NOT NULL COMMENT '点赞个数',
  `news_link` varchar(500) NOT NULL COMMENT '新闻来源'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `picture`
--

INSERT INTO `picture` (`news_id`, `news_title`, `news_image`, `news_like`, `news_link`) VALUES
(1, '美国翻脸拒绝转让F35核心技术', './img/picture/1.jpeg', 850, 'http://photo.sina.cn/album_8_210_38124.htm?ch=8&fromsinago=1&page_start=1&page_end=100'),
(2, 'baby古典婚纱照曝光 大秀美腿', './img/picture/2.jpeg', 236, 'http://ent.163.com/photoview/00AJ0003/572544.html'),
(3, '白宫国宴：黑松露配绍兴黄酒', './img/picture/3.jpeg', 155, 'http://www.chinanews.com/tp/hd2011/2015/09-25/566600.shtml'),
(4, 'Apple Watch应借鉴的10项特性', './img/picture/4.jpeg', 188, 'http://tech.163.com/photoview/0AI20009/7641.html'),
(5, '探秘世界上最智能的大楼Edge', './img/picture/5.jpeg', 100, 'http://tech.163.com/photoview/0AI20009/7643.html'),
(6, '习近平与奥巴马夜游白宫', './img/picture/6.jpeg', 248, 'http://view.inews.qq.com/a/NEW2015092501821501');

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE IF NOT EXISTS `recommend` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(255) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) NOT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `recommend`
--

INSERT INTO `recommend` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '中美双方就网络安全达成共识', './img/recommend/1.jpg', '3小时前', '专题', 'http://news.cnr.cn/native/gd/20150926/t20150926_519984410.shtml'),
(2, '苹果6s首发 广东配送居首位', './img/recommend/2.jpg', '1分钟前', '网易要闻', 'http://3g.163.com/ntes/15/0926/14/B4EQSBB600963VRO.html'),
(3, '茅台低调踏足金融圈 业内分析500亿年度目标遭放弃', './img/recommend/3.jpg', '2分钟前', '新浪要闻', 'http://sinanews.sina.cn/sharenews.shtml?id=fxiehns3289555-comos-finance-cms&fromsinago=1&page_start=1&page_end=100'),
(4, '娘娘生快!邓超晒孙俪童年萌照:穿红衣戴红花', './img/recommend/4.jpg', '3分钟前', '搜狐要闻', 'http://3g.k.sohu.com/t/n71400896'),
(5, '中标方:80亿买中国第一赛事不贵 暂不考虑付费', './img/recommend/5.jpg', '5分钟前', '新浪要闻', 'http://sinanews.sina.cn/sharenews.shtml?id=fxifmki9532390-comos-sports-cms&fromsinago=1&page_start=1&page_end=100'),
(6, '《港囧》唯一的亮点，就是这些经典粤语老歌了', './img/recommend/6.jpg', '3分钟前', '凤凰要闻', 'http://i.ifeng.com/news?aid=101646866'),
(7, '22:30搜狐看《挑战者》冰冰李晨比摔跤', './img/recommend/7.jpg', '12分钟前', '搜狐要闻', 'http://3g.k.sohu.com/t/n71387999'),
(8, '保时捷CEO出任大众新CEO', './img/recommend/8.jpg', '2小时前', '腾讯要闻', 'http://view.inews.qq.com/a/NEW2015092600189002');

-- --------------------------------------------------------

--
-- 表的结构 `society`
--

CREATE TABLE IF NOT EXISTS `society` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `society`
--

INSERT INTO `society` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '25岁女子应聘快递员遭拒起诉用人单位(图)', './img/society/1.jpg', '3小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieynu2235785-comos-news-cms&fromsinago=1&page_start=1&page_end=100'),
(2, '儿子录音播放“我想你”唤醒植物人父亲', './img/society/2.jpg', '6分钟前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymu0842565-comos-news-cms&fromsinago=1&page_start=1&page_end=100'),
(3, '又现天价宰客!游客长白山租车 车程1小时要1万', './img/society/3.jpg', '20分钟前', NULL, 'http://3g.k.sohu.com/t/n71163620'),
(4, '烤鱼店被曝使用垃圾鱼 店家：难道让鱼吃米饭？', './img/society/4.jpg', '1小时前', NULL, 'http://3g.k.sohu.com/t/n71228403'),
(5, '陕西转盘设8个红绿灯惹争议', './img/society/5.jpg', '2小时前', NULL, 'http://news.163.com/15/0925/06/B4BBLSST00014AEE.html'),
(6, '江西2000人广场上贴面膜泡脚', './img/society/6.jpg', '2小时前', NULL, 'http://news.163.com/15/0925/08/B4BJO9PG00011229.html'),
(7, '江苏母子被车碾 路人围观拍照', './img/society/7.jpg', '3小时前', NULL, 'http://news.163.com/15/0925/07/B4BDUOTE00014JB6.html');

-- --------------------------------------------------------

--
-- 表的结构 `sports`
--

CREATE TABLE IF NOT EXISTS `sports` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `sports`
--

INSERT INTO `sports` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '来了！阿扎尔签约加盟新浪体育 扎球王这中文啊', './img/sports/1.jpg', '8分钟前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxifmki9506906-comos-sports-cms&fromsinago=1&page_start=1&page_end=100'),
(2, '国际传奇冠军赛皇马国米争冠 中国队将争夺季军', './img/sports/2.jpg', '9分钟前', NULL, 'http://3g.k.sohu.com/t/n71260724'),
(3, '争冠关键之战！上港发布战鲁能海报：后盾(图)', './img/sports/3.jpg', '15分钟前', NULL, 'http://i.ifeng.com/news?aid=101613919'),
(4, '闹剧结束！曝汤普森终于与骑士谈妥 3年5300万续约', './img/sports/4.jpg', '21分钟前', NULL, 'http://i.ifeng.com/news?aid=101613991'),
(5, '恒大欲调中超赛程战亚冠遭泰达拒绝:我们要保级', './img/sports/5.jpg', '1小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymu0827879-comos-sports-cms&fromsinago=1&page_start=1&page_end=100'),
(6, '京媒:中超3亿版权不贵 张琳芃留洋踢上球最重要', './img/sports/6.jpg', '1小时前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxifmki9493394-comos-sports-cms&fromsinago=1&page_start=1&page_end=100'),
(7, '中国女网一姐连丢12局惨遭横扫 女单又全军覆没了', './img/sports/7.jpg', '2小时前', NULL, 'http://i.ifeng.com/news?aid=101616206');

-- --------------------------------------------------------

--
-- 表的结构 `technology`
--

CREATE TABLE IF NOT EXISTS `technology` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) NOT NULL COMMENT '图片地址',
  `news_time` varchar(50) NOT NULL COMMENT '发布时间',
  `news_source` varchar(50) DEFAULT NULL COMMENT '新闻来源',
  `news_link` varchar(500) NOT NULL COMMENT '新闻地址'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `technology`
--

INSERT INTO `technology` (`news_id`, `news_title`, `news_image`, `news_time`, `news_source`, `news_link`) VALUES
(1, '中电信中联通正酝酿合并？ 最好时机或已错过', './img/technology/1.jpg', '7分钟前', NULL, 'http://sinanews.sina.cn/sharenews.shtml?id=fxifmki9502861-comos-tech-cms&fromsinago=1&page_start=1&page_end=100'),
(2, '帮iPhone省空间的iOS新功能 因为故障被推迟了', './img/technology/2.jpg', '20分钟前', NULL, 'http://tech.sina.com.cn/it/2015-09-25/doc-ifxieymu0843698.shtml'),
(3, 'Android 6.0 OTA更新10月5日开始推送', './img/technology/3.jpg', '20分钟前', NULL, 'http://news.yesky.com/257/97712757.shtml'),
(4, '王思聪吐槽iOS9 把校长的iPhone6变成了安卓', './img/technology/4.jpg', '1小时前', NULL, 'http://www.techweb.com.cn/tele/2015-09-24/2207076.shtml'),
(5, '亮相首周iPhone 6s销量或达1300万部 玫瑰金占40%', './img/technology/5.jpg', '1小时前', NULL, 'http://i.ifeng.com/news?aid=101616993'),
(6, 'GoPro正开发无人机产品 明年上半年将亮相', './img/technology/6.jpg', '1小时前', NULL, 'http://digi.tech.qq.com/a/20150925/025964.htm'),
(7, '谷歌新专利 或用触控板代替键盘空格键', './img/technology/7.jpg', '1小时前', NULL, 'http://digi.tech.qq.com/a/20150925/026251.htm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allin`
--
ALTER TABLE `allin`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `entertainment`
--
ALTER TABLE `entertainment`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `internet`
--
ALTER TABLE `internet`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `military`
--
ALTER TABLE `military`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `recommend`
--
ALTER TABLE `recommend`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `society`
--
ALTER TABLE `society`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `technology`
--
ALTER TABLE `technology`
  ADD PRIMARY KEY (`news_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allin`
--
ALTER TABLE `allin`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `entertainment`
--
ALTER TABLE `entertainment`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `internet`
--
ALTER TABLE `internet`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `local`
--
ALTER TABLE `local`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `military`
--
ALTER TABLE `military`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `picture`
--
ALTER TABLE `picture`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `recommend`
--
ALTER TABLE `recommend`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `society`
--
ALTER TABLE `society`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `technology`
--
ALTER TABLE `technology`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
