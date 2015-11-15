-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-10-13 15:03:58
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bdnews_node`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int(11) NOT NULL COMMENT '新闻编号',
  `news_title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '新闻标题',
  `news_image` varchar(500) CHARACTER SET utf8 DEFAULT NULL COMMENT '图片地址',
  `news_main` varchar(500) CHARACTER SET utf8 DEFAULT NULL COMMENT '主要内容',
  `news_time` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '发布时间',
  `news_link` varchar(1000) CHARACTER SET utf8 NOT NULL COMMENT '新闻地址',
  `news_source` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '新闻来源',
  `news_like` int(11) DEFAULT NULL COMMENT '点赞个数',
  `category` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '栏目分类'
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`news_id`, `news_title`, `news_image`, `news_main`, `news_time`, `news_link`, `news_source`, `news_like`, `category`) VALUES
(1, '中美双方就网络安全达成共识', 'images/recommend/1.jpg', NULL, '2015-09-26 10:54:00', 'http://news.cnr.cn/native/gd/20150926/t20150926_519984410.shtml', '专题', NULL, 'recommend'),
(2, '苹果6s首发 广东配送居首位', 'images/recommend/2.jpg', NULL, '2015-09-26 14:47:23', 'http://3g.163.com/ntes/15/0926/14/B4EQSBB600963VRO.html', '网易要闻', NULL, 'recommend'),
(3, '茅台低调踏足金融圈 业内分析500亿年度目标遭放弃', 'images/recommend/3.jpg', NULL, '2015-09-26 00:46:00', 'http://finance.sina.com.cn/chanjing/gsnews/20150926/004623355070.shtml', '新浪要闻', NULL, 'recommend'),
(4, '娘娘生快!邓超晒孙俪童年萌照:穿红衣戴红花', 'images/recommend/4.jpg', NULL, '2015-09-26 07:43:47', 'http://yule.sohu.com/20150926/n422156903.shtml', '搜狐要闻', NULL, 'recommend'),
(5, '中标方:80亿买中国第一赛事不贵 暂不考虑付费', 'images/recommend/5.jpg', NULL, '2015-09-25 23:55:00', 'http://sports.sina.com.cn/china/j/2015-09-26/doc-ifxieynu2323202.shtml?c=spr_mthz_hao360_sports_home_t001', '新浪要闻', NULL, 'recommend'),
(6, '《港囧》唯一的亮点，就是这些经典粤语老歌了', 'images/recommend/6.jpg', NULL, '2015-09-26 10:49:00', 'http://i.ifeng.com/news?aid=101646866', '凤凰要闻', NULL, 'recommend'),
(7, '22:30搜狐看《挑战者》冰冰李晨比摔跤', 'images/recommend/7.jpg', NULL, '2015-09-26 16:58:00', 'http://3g.k.sohu.com/t/n71387999', '搜狐要闻', NULL, 'recommend'),
(8, '保时捷CEO出任大众新CEO', 'images/recommend/8.jpg', NULL, '2015-09-26 00:44:00', 'http://view.inews.qq.com/a/NEW2015092600189002', '腾讯要闻', NULL, 'recommend'),
(9, '中美互联网：市场是朋友 厉害是关键', 'images/allin/1.jpg', NULL, '2015-09-25 09:50:00', 'http://taoduanfang.baijia.baidu.com/article/177987', NULL, NULL, 'allin'),
(10, '专利优势不能保证华为手机成为未来赢家', 'images/allin/2.jpg', NULL, '2015-09-25 09:29:00', 'http://baiming.baijia.baidu.com/article/178014', NULL, NULL, 'allin'),
(11, '阿里双主场天猫电器大促 谁在颤抖？', 'images/allin/3.jpg', NULL, '2015-09-25 09:00:00', 'http://laotie.baijia.baidu.com/article/177968', NULL, NULL, 'allin'),
(12, '为什么iOS可能会成为新一代的企业操作系统？', 'images/allin/4.jpg', NULL, '2015-09-25 08:15:00', 'http://junstapo.baijia.baidu.com/article/177939', NULL, NULL, 'allin'),
(13, '在2015年移动分发的此时此刻，我怎么做免费推广', 'images/allin/5.jpg', NULL, '2015-09-25 08:00:00', 'http://gupowang.baijia.baidu.com/article/177747', NULL, NULL, 'allin'),
(14, '《九层妖塔》：添好油加好醋', 'images/allin/6.jpg', NULL, '2015-09-25 07:39:00', 'http://mantuner.baijia.baidu.com/article/177924', NULL, NULL, 'allin'),
(15, '港囧：徐峥拍了一部《少年包贝尔的奇幻漂流》吗？', 'images/allin/7.jpg', NULL, '2015-09-25 17:56:00', 'http://yangshiyang.baijia.baidu.com/article/178914', NULL, NULL, 'allin'),
(16, '北京将新增40亿债券额度 用于新机场征地拆迁', NULL, '北京新航城控股有限公司联合榆垡镇政府、礼贤镇政府向社会公开征集新机场安置房名称。', '2015-09-25 15:00:52', 'http://finance.stockstar.com/JC2015092500002172.shtml', '证券之星', NULL, 'local'),
(17, '河北曹妃甸示范区5至15年内实现与北京同城化发展', NULL, '对接北京企业达160余家。', '2015-09-25 14:55:52', 'http://www.cs.com.cn/ssgs/hyzx/201509/t20150925_4807091.html', '中国证券报', NULL, 'local'),
(18, '12岁孤儿吃包谷住草棚 梦想到北京上大学', NULL, '个子也不高，看上去和城市里6、7岁的孩子差不多。', '2015-09-25 14:41:03', 'http://finance.jrj.com.cn/2015/09/25144119866758.shtml', '金融界', NULL, 'local'),
(19, '中秋公园赏月 北京公交增加晚间20点至22点运力', NULL, '为了方便市民外出赏月，公交集团将重点增加途经这些地区的118路、103路、5路等公交线路晚间2...', '2015-09-25 14:43:06', 'http://beijing.qianlong.com/3825/2015/09/25/8325@10532401.htm', '千龙网', NULL, 'local'),
(20, '北京联通iPhone 6s开售 可24期免息购机', NULL, '联通版iPhone6s/6sPlus还支持4GLTEAdvanced技术，通过中国联通正在大力...', '2015-09-25 14:24:52', 'http://m.zol.com.cn/article/5433624.html', '中关村在线', NULL, 'local'),
(21, '北京众创空间再扩容 多模式服务创业者', NULL, '作为国内创业服务模式创新最为活跃的地区，北京市再次扩大“众创空间”服务机构名录，总数已经达到65家。', '2015-09-25 15:09:09', 'http://tech.sina.com.cn/i/2015-09-25/doc-ifxieymv7629094.shtml', '新浪科技', NULL, 'local'),
(22, '美国翻脸拒绝转让F35核心技术', 'images/picture/1.jpeg', NULL, NULL, 'http://photo.sina.cn/album_8_210_38124.htm?ch=8&fromsinago=1&page_start=1&page_end=100', NULL, 850, 'picture'),
(23, 'baby古典婚纱照曝光 大秀美腿', 'images/picture/2.jpeg', NULL, NULL, 'http://ent.163.com/photoview/00AJ0003/572544.html', NULL, 236, 'picture'),
(24, '白宫国宴：黑松露配绍兴黄酒', 'images/picture/3.jpeg', NULL, NULL, 'http://www.chinanews.com/tp/hd2011/2015/09-25/566600.shtml', NULL, 155, 'picture'),
(25, 'Apple Watch应借鉴的10项特性', 'images/picture/4.jpeg', NULL, NULL, 'http://tech.163.com/photoview/0AI20009/7641.html', NULL, 188, 'picture'),
(26, '探秘世界上最智能的大楼Edge', 'images/picture/5.jpeg', NULL, NULL, 'http://tech.163.com/photoview/0AI20009/7643.html', NULL, 100, 'picture'),
(27, '习近平与奥巴马夜游白宫', 'images/picture/6.jpeg', NULL, NULL, 'http://view.inews.qq.com/a/NEW2015092501821501', NULL, 248, 'picture'),
(28, '23:30看《真心英雄》 赵薇徐峥港囧成真囧', 'images/entertainment/1.jpg', NULL, '2015-09-25 00:00:00', 'http://3g.k.sohu.com/t/n71222628', NULL, NULL, 'entertainment'),
(29, '刘亦菲转发侧颜照 网友被美哭', 'images/entertainment/2.jpg', NULL, '2015-09-25 10:06:52', 'http://ent.163.com/15/0925/10/B4BOE01200031H2L.html', NULL, NULL, 'entertainment'),
(30, '《好声音》汪峰庾澄庆场 “导师对战”上演', 'images/entertainment/3.jpg', NULL, '2015-09-25 09:33:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymu0839643-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(31, '陈学冬回应与小四捆绑：有宣传价值即合理', 'images/entertainment/4.jpg', NULL, '2015-09-24 17:41:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymv7601705-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(32, '陈伟霆懒理分手 蒙面置身沙漠', 'images/entertainment/5.jpg', NULL, '2015-09-25 07:36:00', 'http://view.inews.qq.com/a/ENT2015092501256905', NULL, NULL, 'entertainment'),
(33, '李晨否认范冰冰息影 默认计划明年结婚', 'images/entertainment/6.jpg', NULL, '2015-09-25 07:36:12', 'http://ent.sina.com.cn/s/m/2015-09-25/doc-ifxieyms4068419.shtml?t=1443173631697', NULL, NULL, 'entertainment'),
(34, '陈妍希曝求爱经过:收表白信息', 'images/entertainment/7.jpg', NULL, '2015-09-25 10:11:12', 'http://ent.163.com/15/0925/10/B4BOLTV400031H2L.html', NULL, NULL, 'entertainment'),
(35, '25岁女子应聘快递员遭拒起诉用人单位(图)', 'images/society/1.jpg', NULL, '2015-09-25 08:30:40', 'http://sinanews.sina.cn/sharenews.shtml?id=fxieynu2235785-comos-news-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'society'),
(36, '儿子录音播放“我想你”唤醒植物人父亲', 'images/society/2.jpg', NULL, '2015-09-25 17:39:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxieymu0842565-comos-news-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'society'),
(37, '又现天价宰客!游客长白山租车 车程1小时要1万', 'images/society/3.jpg', NULL, '2015-09-24 17:04:00', 'http://3g.k.sohu.com/t/n71163620', NULL, NULL, 'society'),
(38, '烤鱼店被曝使用垃圾鱼 店家：难道让鱼吃米饭？', 'images/society/4.jpg', NULL, '2015-09-25 09:48:17', 'http://3g.k.sohu.com/t/n71228403', NULL, NULL, 'society'),
(39, '陕西转盘设8个红绿灯惹争议', 'images/society/5.jpg', NULL, '2015-09-25 06:07:12', 'http://news.163.com/15/0925/06/B4BBLSST00014AEE.html', NULL, NULL, 'society'),
(40, '江西2000人广场上贴面膜泡脚', 'images/society/6.jpg', NULL, '2015-09-25 08:45:07', 'http://news.163.com/15/0925/08/B4BJO9PG00011229.html', NULL, NULL, 'society'),
(41, '江苏母子被车碾 路人围观拍照', 'images/society/7.jpg', NULL, '2015-09-25 06:53:00', 'http://news.163.com/15/0925/07/B4BDUOTE00014JB6.html', NULL, NULL, 'society'),
(42, '俄专家：长征6号造价便宜 对俄火箭有严重威胁', 'images/military/1.jpg', NULL, '2015-09-24 15:03:00', 'http://i.ifeng.com/news?aid=101599908', NULL, NULL, 'military'),
(43, '金正恩史无前例向全体军民发奖 约一月工资', 'images/military/2.jpg', NULL, '2015-09-25 10:25:00', 'http://3g.k.sohu.com/t/n71262661', NULL, NULL, 'military'),
(44, '国防部:裁军30万将分步实施 2017年底基本完成', 'images/military/3.jpg', NULL, '2015-09-24 17:28:00', 'http://i.ifeng.com/news?aid=101603063', NULL, NULL, 'military'),
(45, '中国最新093B核潜艇装垂发系统 可狙杀美航母', 'images/military/4.jpg', NULL, '2015-09-25 08:43:00', 'http://i.ifeng.com/news?aid=101621683', NULL, NULL, 'military'),
(46, '产油大国争抢中国市场 伊拉克挤掉俄罗斯居第三', 'images/military/5.jpg', NULL, '2015-09-25 09:32:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxieynu2269760-comos-mil-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'military'),
(47, '国防部回应中国军舰进美国领海：享有过境通行权', 'images/military/6.jpg', NULL, '2015-09-25 08:14:00', 'http://i.ifeng.com/news?aid=101619102', NULL, NULL, 'military'),
(48, '少将：美国想做霸主会遏制华 中国大搞南海演习', 'images/military/7.jpg', NULL, '2015-09-25 08:45:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxiehns3233319-comos-mil-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'military'),
(49, '中电信中联通正酝酿合并？ 最好时机或已错过', 'images/technology/1.jpg', NULL, '2015-09-25 09:54:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxifmki9502861-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'technology'),
(50, '帮iPhone省空间的iOS新功能 因为故障被推迟了', 'images/technology/2.jpg', NULL, '2015-09-25 10:52:00', 'http://tech.sina.com.cn/it/2015-09-25/doc-ifxieymu0843698.shtml', NULL, NULL, 'technology'),
(51, 'Android 6.0 OTA更新10月5日开始推送', 'images/technology/3.jpg', NULL, '2015-09-25 09:01:00', 'http://news.yesky.com/257/97712757.shtml', NULL, NULL, 'technology'),
(52, '王思聪吐槽iOS9 把校长的iPhone6变成了安卓', 'images/technology/4.jpg', NULL, '2015-09-24 19:26:27', 'http://www.techweb.com.cn/tele/2015-09-24/2207076.shtml', NULL, NULL, 'technology'),
(53, '亮相首周iPhone 6s销量或达1300万部 玫瑰金占40%', 'images/technology/5.jpg', NULL, '2015-09-25 07:11:00', 'http://i.ifeng.com/news?aid=101616993', NULL, NULL, 'technology'),
(54, 'GoPro正开发无人机产品 明年上半年将亮相', 'images/technology/6.jpg', NULL, '2015-09-25 10:21:00', 'http://digi.tech.qq.com/a/20150925/025964.htm', NULL, NULL, 'technology'),
(55, '谷歌新专利 或用触控板代替键盘空格键', 'images/technology/7.jpg', NULL, '2015-09-25 10:24:00', 'http://digi.tech.qq.com/a/20150925/026251.htm', NULL, NULL, 'technology'),
(56, '创业路上如何找到合适的伙伴，“极速合伙人”来帮你', 'images/internet/1.jpg', NULL, '2015-09-25 11:23:00', 'http://www.36kr.com/p/5037810.html', NULL, NULL, 'internet'),
(57, 'BAT即将上演的O2O争霸赛，都是怎样的打法？', 'images/internet/2.jpg', NULL, '2015-09-25 10:34:00', 'http://www.tmtpost.com/1441505.html', NULL, NULL, 'internet'),
(58, '互联网金融周报：蚂蚁金服增资控股国泰产险', 'images/internet/3.jpg', NULL, '2015-09-24 22:22:00', 'http://www.huxiu.com/article/126878/1.html?f=index_feed_article', NULL, NULL, 'internet'),
(59, '李克强考察跨境电商 现场掏200元买英文书(图)', 'images/internet/4.jpg', NULL, '2015-09-25 09:34:00', 'http://tech.sina.com.cn/i/2015-09-25/doc-ifxieyms4073610.shtml', NULL, NULL, 'internet'),
(60, '《财富》最受赞赏中国公司：阿里百度华为蝉联前三', 'images/internet/5.jpg', NULL, '2015-09-25 07:34:29', 'http://www.techweb.com.cn/internet/2015-09-25/2207089.shtml', NULL, NULL, 'internet'),
(61, '利用人工智能和大数据对主观题智能阅卷还有多远？', 'images/internet/6.jpg', NULL, '2015-09-25 09:25:00', 'http://www.tmtpost.com/1441517.html', NULL, NULL, 'internet'),
(62, '用户即算法，知乎这次站在了今日头条的对面', 'images/internet/7.jpg', NULL, '2015-09-25 07:46:00', 'http://www.huxiu.com/article/126891/1.html?f=index_headlines', NULL, NULL, 'internet'),
(63, '来了！阿扎尔签约加盟新浪体育 扎球王这中文啊', 'images/sports/1.jpg', NULL, '2015-09-25 10:48:00', 'http://sports.sina.com.cn/g/pl/2015-09-25/doc-ifxifmki9506906.shtml', NULL, NULL, 'sports'),
(64, '国际传奇冠军赛皇马国米争冠 中国队将争夺季军', 'images/sports/2.jpg', NULL, '2015-09-25 10:00:00', 'http://3g.k.sohu.com/t/n71260724', NULL, NULL, 'sports'),
(65, '争冠关键之战！上港发布战鲁能海报：后盾(图)', 'images/sports/3.jpg', NULL, '2015-09-25 06:35:00', 'http://i.ifeng.com/news?aid=101613919', NULL, NULL, 'sports'),
(66, '闹剧结束！曝汤普森终于与骑士谈妥 3年5300万续约', 'images/sports/4.jpg', NULL, '2015-09-25 06:41:00', 'http://i.ifeng.com/news?aid=101613991', NULL, NULL, 'sports'),
(67, '恒大欲调中超赛程战亚冠遭泰达拒绝:我们要保级', 'images/sports/5.jpg', NULL, '2015-09-24 20:07:00', 'http://sports.sina.com.cn/china/j/2015-09-24/doc-ifxieymu0827879.shtml', NULL, NULL, 'sports'),
(68, '京媒:中超3亿版权不贵 张琳芃留洋踢上球最重要', 'images/sports/6.jpg', NULL, '2015-09-24 23:19:00', 'http://sports.sina.com.cn/china/j/2015-09-24/doc-ifxifmki9493394.shtml', NULL, NULL, 'sports'),
(69, '中国女网一姐连丢12局惨遭横扫 女单又全军覆没了', 'images/sports/7.jpg', NULL, '2015-09-25 07:48:00', 'http://i.ifeng.com/news?aid=101616206', NULL, NULL, 'sports'),
(70, '习近平联大讲话彰显中国气魄', 'images/recommend/9.jpg', NULL, '2015-10-07 15:57:00', 'http://3g.163.com/ntes/15/1007/15/B5B6H37D00963VRO.html', '网易头条', NULL, 'recommend'),
(71, '饿了么CEO张旭豪：美团点评合并已正式完成', 'images/recommend/10.jpg', NULL, '2015-10-07 21:57:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmqc4908120-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', '新浪科技', NULL, 'recommend'),
(72, '苹果A9X代表ARM架构重大胜利，将沉重打击Intel', 'images/allin/8.jpg', NULL, '2015-10-07 16:17:00', 'http://baiming.baijia.baidu.com/article/185703', NULL, NULL, 'allin'),
(73, '没有意外发生的国庆档：或是中国电影产业之幸', 'images/allin/9.jpg', NULL, '2015-10-07 08:46:00', 'http://ccy.baijia.baidu.com/article/185433', NULL, NULL, 'allin'),
(74, '国庆奇遇记：5G流量不翼而飞 原来被中移动清零', 'images/allin/10.jpg', NULL, '2015-10-07 21:43:00', 'http://maoqiying.baijia.baidu.com/article/185820', NULL, NULL, 'allin'),
(75, '诺贝尔奖金在北京高房价面前就是个渣？', NULL, '被问及奖金怎么用时，笑称，这点奖金还不够买北京的半个客厅吧。', '2015-10-07 16:01:00', 'http://liuguangyubl.blog.sohu.com/310247602.html', '搜狐财经', NULL, 'local'),
(76, '世界旅游城市发展指数北京排第六', NULL, '世界旅游城市联合会2015拉巴特非斯香山旅游峰会在摩洛哥王国拉巴特和非斯举行，今年峰会的主题是...', '2015-10-07 19:58:00', 'http://www.cs.com.cn/xwzx/hg/201510/t20151007_4810671.html', '中国证券网', NULL, 'local'),
(77, '卡卡回归巴西队 备战与智利世预赛', 'images/picture/7.jpeg', NULL, NULL, 'http://view.inews.qq.com/a/SPO2015100702404703', NULL, 861, 'picture'),
(78, '网曝俄罗斯T-50战机高清美图', 'images/picture/8.jpeg', NULL, NULL, 'http://photo.sina.cn/album_8_205_38271.htm?ch=8&fromsinago=1&page_start=1&page_end=100', NULL, 1279, 'picture'),
(79, '章子怡晒照合影Bigbang 宽松黑衣遮孕肚', 'images/entertainment/8.jpg', NULL, '2015-10-07 14:16:00', 'http://3g.k.sohu.com/t/n72465086', NULL, NULL, 'entertainment'),
(80, '发如雪，李安跟周董唱中国风', 'images/entertainment/9.jpg', NULL, '2015-10-07 21:28:00', 'http://view.inews.qq.com/a/ENT2015100703348203', NULL, NULL, 'entertainment'),
(81, '清华北大生源争夺战提前打响', 'images/society/8.jpg', NULL, '2015-10-07 09:44:00', 'http://news.163.com/15/1007/00/B59K6IRB00014AED.html', NULL, NULL, 'society'),
(82, '中国老太日本碰瓷？带团领队导游否认', 'images/society/9.jpg', NULL, '2015-10-07 19:33:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxiqtqy0373321-comos-news-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'society'),
(83, '俄战机进土国领空 遭土军拦截', 'images/military/8.jpg', NULL, '2015-10-07 03:30:00', 'http://view.inews.qq.com/a/MIL2015100600908101', NULL, NULL, 'military'),
(84, '美媒：中国没实力造核航母 多项技术远远落后美俄', 'images/military/9.jpg', NULL, '2015-10-07 10:34:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxiqtqy0402794-comos-mil-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'military'),
(85, '俄美谋划叙利亚空战相遇准则', 'images/military/10.jpg', NULL, '2015-10-07 13:12:00', 'http://i.ifeng.com/news?aid=101832882', NULL, NULL, 'military'),
(86, '谷歌Nexus式微，但承继安卓生态大统的重任仍在', 'images/technology/8.jpg', NULL, '2015-10-07 08:29:00', 'http://news.zol.com.cn/544/5444103.html', NULL, NULL, 'technology'),
(87, '苹果在美国避税高达592亿美元', 'images/technology/9.jpg', NULL, '2015-10-07 18:25:00', 'http://www.cnbeta.com/articles/436477.htm', NULL, NULL, 'technology'),
(88, 'Surface Pro 4重磅新功能演示：自适应边框', 'images/technology/10.jpg', NULL, '2015-10-07 22:28:00', 'http://news.zol.com.cn/544/5444162.html', NULL, NULL, 'technology'),
(89, '社交新闻聚合网站Reddit推独立新闻原创站点', 'images/internet/8.jpg', NULL, '2015-10-07 05:30:00', 'http://tech.qq.com/a/20151007/004683.htm', NULL, NULL, 'internet'),
(90, '美团与百度争夺O2O市场的不同战略', 'images/internet/9.jpg', NULL, '2015-10-07 12:32:00', 'http://tech.qq.com/a/20151007/004663.htm', NULL, NULL, 'internet'),
(91, '传苹果 21.5 英寸 4K 版 iMac 下周上市', 'images/internet/10.jpg', NULL, '2015-10-07 22:32:00', 'http://www.36kr.com/p/5038136.html', NULL, NULL, 'internet'),
(92, '里约削减奥运预算 志愿者自行解决住宿', 'images/sports/8.jpg', NULL, '2015-10-07 09:06:00', 'http://3g.k.sohu.com/t/n72440388', NULL, NULL, 'sports'),
(93, '重返前100!恒大世界排名压米兰创新高', 'images/sports/9.jpg', NULL, '2015-10-07 11:12:00', 'http://3g.k.sohu.com/t/n72457647', NULL, NULL, 'sports'),
(94, '曝三家公司欲重金争购F1股权', 'images/sports/10.jpg', NULL, '2015-10-07 14:24:00', 'http://sports.163.com/15/1007/13/B5AVRKK700051CDQ.html', NULL, NULL, 'sports'),
(95, '小贝重回梦剧场 力挺吉格斯续写传奇', 'images/sports/11.jpg', NULL, '2015-10-07 20:45:00', 'http://3g.k.sohu.com/t/n72465735', NULL, NULL, 'sports'),
(96, '黄晓明婚礼场地租金超50万 超200名保安', 'images/recommend/11.jpg', NULL, '2015-10-08 08:41:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpy1362967-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', '新浪要闻', NULL, 'recommend'),
(97, '英媒：金正恩正策划行动 望举办世界杯和奥运会', 'images/recommend/12.jpg', NULL, '2015-10-08 10:58:00', 'http://3g.k.sohu.com/t/n72565220', '搜狐要闻', NULL, 'recommend'),
(98, 'Surface Book“倒行逆施”背后的Nexus思维', 'images/allin/11.jpg', NULL, '2015-10-08 10:55:00', 'http://wujunyu.baijia.baidu.com/article/185916', NULL, NULL, 'allin'),
(99, '华为都要开开发者大会了，会有什么不一样？', 'images/allin/12.jpg', NULL, '2015-10-08 11:00:00', 'http://wuyuzheng.baijia.baidu.com/article/186135', NULL, NULL, 'allin'),
(100, '北京7天接待游客1151万人次 旅游总收入超83亿人民币 ', NULL, '最具北京风情的南锣鼓巷人气超高，黄金周的第二天，其客流量达到10万多人，游人数量超过了故宫。', '2015-10-08 09:23:59', 'http://ku.m.chinanews.com/wapapp/baidu/life/2015/10-08/7557519.shtml?bdnews_webapp=1', '中国新闻网', NULL, 'local'),
(101, '北京前8月查处“小官贪腐”290人 超去年总和 ', NULL, '涉案金额共计3.23亿元。', '2015-10-08 10:43:24', 'http://ku.m.chinanews.com/wapapp/baidu/sh/2015/10-08/7557871.shtml', '中国新闻网', NULL, 'local'),
(102, '普京打冰球赛庆祝63岁生日', 'images/picture/9.jpeg', NULL, NULL, 'http://view.inews.qq.com/a/NEW2015100800596905', NULL, 430, 'picture'),
(103, '夏天不当小公主 变身小格格', 'images/picture/10.jpeg', NULL, NULL, 'http://ent.163.com/photoview/00AJ0003/573551.html', NULL, 199, 'picture'),
(104, '韩国情侣金宇彬申敏儿拍写真 亲密依偎', 'images/entertainment/10.jpg', NULL, '2015-10-08 10:55:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpy1370104-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(105, '克雷格厌烦再演007：我选择死亡 除非为钱', 'images/entertainment/11.jpg', NULL, '2015-10-08 11:10:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpz8144979-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(106, '80后情侣313天骑摩托行8万里', 'images/society/10.jpg', NULL, '2015-10-08 08:30:00', 'http://news.163.com/15/1008/05/B5CORHRA00011229.html', NULL, NULL, 'society'),
(107, '十一旅游奇观 媒体:有人带孩子出游只为交作业', 'images/society/11.jpg', NULL, '2015-10-08 11:15:00', 'http://3g.k.sohu.com/t/n72560429', NULL, NULL, 'society'),
(108, 'TPP谈判达成冲击中国？中国自贸区朋友圈不断壮大', 'images/military/11.jpg', NULL, '2015-10-08 09:46:00', 'http://i.ifeng.com/news?aid=101846958', NULL, NULL, 'military'),
(109, '中国第六代战机项目被证实 比歼-20先进一代', 'images/military/12.jpg', NULL, '2015-10-08 11:41:00', 'http://i.ifeng.com/news?aid=101850850', NULL, NULL, 'military'),
(110, '传戴尔将收购数据存储巨头EMC', 'images/technology/11.jpg', NULL, '2015-10-08 08:58:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpy1365087-comos-tech-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'technology'),
(111, 'iOS9系统安装率高达60.94% iOS8降至33.60%', 'images/technology/12.jpg', NULL, '2015-10-08 09:36:00', 'http://news.yesky.com/270/97952270.shtml', NULL, NULL, 'technology'),
(112, '索尼下最后通牒：手机业务明年再不盈利就放弃', 'images/technology/13.jpg', NULL, '2015-10-08 11:41:00', 'http://it.21cn.com/prnews/a/2015/1008/00/30124416.shtml', NULL, NULL, 'technology'),
(113, '中国城市DT服务指数日益提升 沿海超级市群领跑', 'images/internet/11.jpg', NULL, '2015-10-08 09:12:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E4%BA%92%E8%81%94%E7%BD%91/http%3A%2F%2Fit.people.com.cn%2Fn%2F2015%2F1008%2Fc1009-27670079.html/%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82DT%E6%9C%8D%E5%8A%A1%E6%8C%87%E6%95%B0%E6%97%A5%E7%9B%8A%E6%8F%90%E5%8D%87%20%E6%B2%BF%E6%B5%B7%E8%B6%85%E7%BA%A7%E5%B8%82%E7%BE%A4%E9%A2%86%E8%B7%91/%E4%BA%BA%E6%B0%91%E7%BD%91/1444266760000/7602532080346032724', NULL, NULL, 'internet'),
(114, '马斯克在推特泄露信息，入门 SUV 车型 Model Y 或配鹰翼门', 'images/internet/12.jpg', NULL, '2015-10-08 11:52:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E4%BA%92%E8%81%94%E7%BD%91/http%3A%2F%2Fwww.36kr.com%2Fp%2F5038146.html/%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9C%A8%E6%8E%A8%E7%89%B9%E6%B3%84%E9%9C%B2%E4%BF%A1%E6%81%AF%EF%BC%8C%E5%85%A5%E9%97%A8%20SUV%20%E8%BD%A6%E5%9E%8B%20Model%20Y%20%E6%88%96%E9%85%8D%E9%B9%B0%E7%BF%BC%E9%97%A8/36%E6%B0%AA/1444276328000/11279502113545515378', NULL, NULL, 'internet'),
(115, '罗斯缺席公牛13三分擒鹿 巴特勒23+6神射23分', 'images/sports/12.jpg', NULL, '2015-10-08 09:07:00', 'http://i.ifeng.com/news?aid=101831852', NULL, NULL, 'sports'),
(116, '中网纳达尔唯一破发力克对手 携费雷尔晋级八强', 'images/sports/13.jpg', NULL, '2015-10-08 11:10:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpz8132480-comos-sports-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'sports'),
(117, '搜狐专访林良铭：距优秀还很远 望父母为我骄傲', 'images/sports/14.jpg', NULL, '2015-10-08 11:57:00', 'http://3g.k.sohu.com/t/n72591079', NULL, NULL, 'sports'),
(118, '村上春树连续陪跑7年 被称为诺奖界"小李子"', 'images/recommend/13.jpg', NULL, '2015-10-08 19:52:00', 'http://3g.k.sohu.com/t/n72670547', '搜狐头条', NULL, 'recommend'),
(119, '习近平9次全球人物榜上排第几', 'images/recommend/14.jpg', NULL, '2015-10-08 18:39:00', 'http://3g.163.com/ntes/15/1007/19/B5BLRP5000963VRO.html', '网易头条', NULL, 'recommend'),
(120, '放大视野看TPP与中国以及世界的未来', 'images/allin/13.jpg', NULL, '2015-10-08 14:55:00', 'http://xinhaiguang.baijia.baidu.com/article/186488', NULL, NULL, 'allin'),
(121, '用妥协换来牌照的专车如何谈未来？', 'images/allin/14.jpg', NULL, '2015-10-08 19:31:00', 'http://jiaweb.baijia.baidu.com/article/186768', NULL, NULL, 'allin'),
(122, '北京门头沟区 年轻公务员赴基层挂职锻炼', NULL, '北京市门头沟区2015年度年轻公务员挂职锻炼工作启动，该区人社局共选派50余名年轻公务员进行挂...', '2015-10-08 18:43:00', 'http://roll.sohu.com/20151008/n422750425.shtml', '搜狐新闻', NULL, 'local'),
(123, '黄金周北京楼市量价双涨开发商"惜售"', NULL, '郭毅纠正“北京开发商捂盘惜售”的市场消息说，并不能说这些开发商捂盘，大概只是惜售，因为房企也没...', '2015-10-08 20:25:00', 'http://finance.huanqiu.com/roll/2015-10/7708251.html', '环球网', NULL, 'local'),
(124, '微软Surface Book图赏', 'images/picture/11.jpeg', NULL, NULL, 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#image/image%3A%E5%9B%BE%E7%89%87/7864259356092849290/5', NULL, 35, 'picture'),
(125, '詹妮弗-洛佩兹将主持献唱2015全美音乐奖', 'images/entertainment/12.jpg', NULL, '2015-10-08 16:48:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpz8156547-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(126, '黄晓明父母现身红毯心情好：希望有龙凤胎', 'images/entertainment/13.jpg', NULL, '2015-10-08 20:31:00', 'http://sinanews.sina.cn/sharenews.shtml?id=fxirmpz8160944-comos-ent-cms&fromsinago=1&page_start=1&page_end=100', NULL, NULL, 'entertainment'),
(127, '湖北薄刀峰景区7天被堵门6次', 'images/society/12.jpg', NULL, '2015-10-08 18:27:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E7%A4%BE%E4%BC%9A/http%3A%2F%2Fnews.163.com%2F15%2F1008%2F11%2FB5DB0IF70001124J.html/%E6%B9%96%E5%8C%97%E8%96%84%E5%88%80%E5%B3%B0%E6%99%AF%E5%8C%BA7%E5%A4%A9%E8%A2%AB%E5%A0%B5%E9%97%A86%E6%AC%A1/%E6%A5%9A%E5%A4%A9%E9%87%91%E6%8A%A5/1444300025000/3889788913230482812', NULL, NULL, 'society'),
(128, '亚洲多国对中国秀强硬 美国心怀鬼胎', 'images/military/13.jpg', NULL, '2015-10-08 15:07:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E5%86%9B%E4%BA%8B/http%3A%2F%2F3g.k.sohu.com%2Ft%2Fn72622258/%E4%BA%9A%E6%B4%B2%E5%A4%9A%E5%9B%BD%E5%AF%B9%E4%B8%AD%E5%9B%BD%E7%A7%80%E5%BC%BA%E7%A1%AC%20%E7%BE%8E%E5%9B%BD%E5%BF%83%E6%80%80%E9%AC%BC%E8%83%8E/%E7%8E%AF%E7%90%83%E7%BD%91/1444288061000/6014184162271097788', NULL, NULL, 'military'),
(129, '俄空天军司令：战机对叙目标发射弹药均命中目标', 'images/military/14.jpg', NULL, '2015-10-08 18:44:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E5%86%9B%E4%BA%8B/http%3A%2F%2Fi.ifeng.com%2Fnews%3Faid%3D101850851/%E4%BF%84%E7%A9%BA%E5%A4%A9%E5%86%9B%E5%8F%B8%E4%BB%A4%EF%BC%9A%E6%88%98%E6%9C%BA%E5%AF%B9%E5%8F%99%E7%9B%AE%E6%A0%87%E5%8F%91%E5%B0%84%E5%BC%B9%E8%8D%AF%E5%9D%87%E5%91%BD%E4%B8%AD%E7%9B%AE%E6%A0%87/%E4%BA%BA%E6%B0%91%E7%BD%91/1444301084000/2845127157934232690', NULL, NULL, 'military'),
(130, 'Linus Torvalds：2016会是“ARM笔记本之年”', 'images/technology/14.jpg', NULL, '2015-10-08 17:34:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fwww.cnbeta.com%2Farticles%2F436799.htm/Linus%20Torvalds%EF%BC%9A2016%E4%BC%9A%E6%98%AF%E2%80%9CARM%E7%AC%94%E8%AE%B0%E6%9C%AC%E4%B9%8B%E5%B9%B4%E2%80%9D/cnBeta/1444296878000/7303815557098453878', NULL, NULL, 'technology'),
(131, '迪士尼画师对苹果笔很满意', 'images/technology/15.jpg', NULL, '2015-10-08 20:55:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fview.inews.qq.com%2Fa%2FDIG2015100806225703/%E8%BF%AA%E5%A3%AB%E5%B0%BC%E7%94%BB%E5%B8%88%E5%AF%B9%E8%8B%B9%E6%9E%9C%E7%AC%94%E5%BE%88%E6%BB%A1%E6%84%8F/%E8%85%BE%E8%AE%AF%E6%95%B0%E7%A0%81/1444308136000/4648107060543552712', NULL, NULL, 'technology'),
(132, 'AWS否认中国市场举措不利 讽对手无能', 'images/internet/13.jpg', NULL, '2015-10-08 16:54:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#index/info:%E4%BA%92%E8%81%94%E7%BD%91', NULL, NULL, 'internet'),
(133, '领先者纷纷合并 中国互联网还能玩吗?', 'images/internet/14.jpg', NULL, '2015-10-08 20:13:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E4%BA%92%E8%81%94%E7%BD%91/http%3A%2F%2F3g.k.sohu.com%2Ft%2Fn72612075/%E9%A2%86%E5%85%88%E8%80%85%E7%BA%B7%E7%BA%B7%E5%90%88%E5%B9%B6%20%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%98%E8%83%BD%E7%8E%A9%E5%90%97%3F/%E9%A9%AC%E7%BB%A7%E5%8D%8E/1444306417000/5815383487774362964', NULL, NULL, 'internet'),
(134, '马云发布致股东公开信 5000字详解阿里战略', 'images/internet/15.jpg', NULL, '2015-10-08 20:07:00', 'http://tech.qq.com/a/20151008/059727.htm', NULL, NULL, 'internet'),
(135, '世界杯待遇！国足成全球第一支体验空调球场球队', 'images/sports/15.jpg', NULL, '2015-10-08 18:21:00', 'http://m.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_7.0_3_537&bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2Fi.ifeng.com%2Fnews%3Faid%3D101841702/%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BE%85%E9%81%87%EF%BC%81%E5%9B%BD%E8%B6%B3%E6%88%90%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%80%E6%94%AF%E4%BD%93%E9%AA%8C%E7%A9%BA%E8%B0%83%E7%90%83%E5%9C%BA%E7%90%83%E9%98%9F/%E5%87%A4%E5%87%B0%E4%BD%93%E8%82%B2/1444299673000/2619676911447980231', NULL, NULL, 'sports'),
(136, '习近平从严治党立新规的五个“重在”', 'images/recommend/15.jpg', NULL, '2015-10-13 18:32:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/chosen/http%3A%2F%2Fgb.cri.cn%2F42071%2F2015%2F10%2F13%2F3245s5130858.htm/%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%E7%AB%8B%E6%96%B0%E8%A7%84%E7%9A%84%E4%BA%94%E4%B8%AA%E2%80%9C%E9%87%8D%E5%9C%A8%E2%80%9D/%E5%9B%BD%E9%99%85%E5%9C%A8%E7%BA%BF/1444732379000/2095629054302843757', '置顶', NULL, 'recommend'),
(137, '天猫“双11春晚”的11大猜想', 'images/allin/15.jpg', NULL, '2015-10-13 19:21:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/news%3A478%3A%E7%99%BE%E5%AE%B6/http%3A%2F%2Ftanhaisheng.baijia.baidu.com%2Farticle%2F192605/%E5%A4%A9%E7%8C%AB%E2%80%9C%E5%8F%8C11%E6%98%A5%E6%99%9A%E2%80%9D%E7%9A%8411%E5%A4%A7%E7%8C%9C%E6%83%B3/%E7%88%86%E6%96%99%E6%B1%87/1444735295000/4292680691575407325', NULL, NULL, 'allin'),
(138, '百度直达号房产平台发布：最大的产业，最后的O2O阵地', NULL, '万科、万达两大房产行业巨头已先后入驻百度直达号，借力直达号打通房产O2O，从原来的“二万”变身...', '2015-10-13 19:57:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/local%3A0%3A%E5%8C%97%E4%BA%AC/http%3A%2F%2Fwww.huxiu.com%2Farticle%2F128135%2F1.html%3Ff%3Dindex_feed_article/%E5%8F%8C%E5%8D%81%E4%B8%80%E8%BF%98%E6%B2%A1%E5%BC%80%E5%A7%8B%EF%BC%8C%E9%A9%AC%E4%BA%91%E5%B7%B2%E7%94%A838888%E5%85%83%E6%8B%8D%E4%B8%8B%E4%BA%86%E7%AC%AC%E4%B8%80%E5%8D%95/%E8%99%8E%E5%97%85%E7%BD%91/1444737986000/13038894377845210816', '品途网', NULL, 'local'),
(139, '眉山天空出现云海奇观似飞碟', 'images/picture/12.jpeg', NULL, NULL, 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#image/image%3A%E5%9B%BE%E7%89%87/11779310884876590427/0', NULL, 999, 'picture'),
(140, '《琅琊榜》靳东回归 网友调侃画风突变', 'images/entertainment/14.jpg', NULL, '2015-10-13 19:53:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E5%A8%B1%E4%B9%90/http%3A%2F%2Fsinanews.sina.cn%2Fsharenews.shtml%3Fid%3Dfxirmpy1573111-comos-ent-cms%26fromsinago%3D1%26page_start%3D1%26page_end%3D100/%E3%80%8A%E7%90%85%E7%90%8A%E6%A6%9C%E3%80%8B%E9%9D%B3%E4%B8%9C%E5%9B%9E%E5%BD%92%20%E7%BD%91%E5%8F%8B%E8%B0%83%E4%BE%83%E7%94%BB%E9%A3%8E%E7%AA%81%E5%8F%98/%E6%96%B0%E6%B5%AA%E5%A8%B1%E4%B9%90/1444737201000/6904421040540707925', NULL, NULL, 'entertainment'),
(141, '牛津大学入学申请面试题:为什么很多动物有条纹', 'images/society/13.jpg', NULL, '2015-10-13 20:09:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E7%A4%BE%E4%BC%9A/http%3A%2F%2Fsinanews.sina.cn%2Fsharenews.shtml%3Fid%3Dfxirwnr6981956-comos-news-cms%26fromsinago%3D1%26page_start%3D1%26page_end%3D100/%E7%89%9B%E6%B4%A5%E5%A4%A7%E5%AD%A6%E5%85%A5%E5%AD%A6%E7%94%B3%E8%AF%B7%E9%9D%A2%E8%AF%95%E9%A2%98%3A%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E5%8A%A8%E7%89%A9%E6%9C%89%E6%9D%A1%E7%BA%B9/%E7%BE%8A%E5%9F%8E%E6%99%9A%E6%8A%A5/1444738156000/12331686766404424950', NULL, NULL, 'society'),
(142, '美军F22战机及里根号航母将赴韩国 威慑周边国家', 'images/military/15.jpg', NULL, '2015-10-13 18:18:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E5%86%9B%E4%BA%8B/http%3A%2F%2Fsinanews.sina.cn%2Fsharenews.shtml%3Fid%3Dfxirmra0087292-comos-mil-cms%26fromsinago%3D1%26page_start%3D1%26page_end%3D100/%E7%BE%8E%E5%86%9BF22%E6%88%98%E6%9C%BA%E5%8F%8A%E9%87%8C%E6%A0%B9%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%B0%86%E8%B5%B4%E9%9F%A9%E5%9B%BD%20%E5%A8%81%E6%85%91%E5%91%A8%E8%BE%B9%E5%9B%BD%E5%AE%B6/%E4%B8%AD%E5%9B%BD%E6%96%B0%E9%97%BB%E7%BD%91/1444731522000/6037341442040172206', NULL, NULL, 'military'),
(143, '戴尔买了EMC 惠普CEO笑了：戴尔已欠巨债不足为惧', 'images/technology/16.jpg', NULL, '2015-10-13 19:05:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fi.ifeng.com%2Fnews%3Faid%3D102033697/%E6%88%B4%E5%B0%94%E4%B9%B0%E4%BA%86EMC%20%E6%83%A0%E6%99%AECEO%E7%AC%91%E4%BA%86%EF%BC%9A%E6%88%B4%E5%B0%94%E5%B7%B2%E6%AC%A0%E5%B7%A8%E5%80%BA%E4%B8%8D%E8%B6%B3%E4%B8%BA%E6%83%A7/%E5%87%A4%E5%87%B0%E7%A7%91%E6%8A%80/1444734347000/2396383103569606432', NULL, NULL, 'technology'),
(144, '杭州留不住天猫:北京让互联网产业不平衡加剧?', 'images/internet/16.jpg', NULL, '2015-10-13 20:41:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E4%BA%92%E8%81%94%E7%BD%91/http%3A%2F%2F3g.k.sohu.com%2Ft%2Fn73390091/%E6%9D%AD%E5%B7%9E%E7%95%99%E4%B8%8D%E4%BD%8F%E5%A4%A9%E7%8C%AB%3A%E5%8C%97%E4%BA%AC%E8%AE%A9%E4%BA%92%E8%81%94%E7%BD%91%E4%BA%A7%E4%B8%9A%E4%B8%8D%E5%B9%B3%E8%A1%A1%E5%8A%A0%E5%89%A7%3F/%E7%8E%8B%E6%96%B0%E5%96%9CTMT/1444740063000/5976166666543891558', NULL, NULL, 'internet'),
(145, '沪媒：联赛扩军大势所趋 敢于尝试切莫因噎废食', 'images/sports/16.jpg', NULL, '2015-10-13 20:49:00', 'http://m.baidu.com/news?fr=mohome&ssid=803d63717a786c6a313938361d08&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_4.2_3_533&bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2F3g.k.sohu.com%2Ft%2Fn73480582/%E6%B2%AA%E5%AA%92%EF%BC%9A%E8%81%94%E8%B5%9B%E6%89%A9%E5%86%9B%E5%A4%A7%E5%8A%BF%E6%89%80%E8%B6%8B%20%E6%95%A2%E4%BA%8E%E5%B0%9D%E8%AF%95%E5%88%87%E8%8E%AB%E5%9B%A0%E5%99%8E%E5%BA%9F%E9%A3%9F/%E5%9B%BD%E5%86%85%E8%B6%B3%E7%90%83/1444740545000/6062521910348695880', NULL, NULL, 'sports');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻编号',AUTO_INCREMENT=148;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
