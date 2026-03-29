/** Nguồn trích dẫn — số thứ tự khớp chú thích trong bài. */
export type ReferenceEntry = {
  n: number;
  citation: string;
  href: string;
};

const raw: Omit<ReferenceEntry, "n">[] = [
  {
    citation:
      "The Humility of God – Catholic Stand (truy cập 28/03/2026)",
    href: "https://catholicstand.com/the-humility-of-god/",
  },
  {
    citation:
      "Humility and True Greatness - Crossroads Initiative (truy cập 28/03/2026)",
    href: "https://www.crossroadsinitiative.com/media/articles/humility-humility-humility-and-humility/",
  },
  {
    citation:
      "The Pathway to Humility - The Catholic Witness (truy cập 28/03/2026)",
    href: "https://www.catholicwitness.org/the-pathway-to-humility/",
  },
  {
    citation:
      "How do we relate God's humility with God's power? - Psephizo (truy cập 28/03/2026)",
    href: "https://www.psephizo.com/biblical-studies/how-do-we-relate-gods-humility-with-gods-power/",
  },
  {
    citation:
      "CATHOLIC ENCYCLOPEDIA: Humility - New Advent (truy cập 28/03/2026)",
    href: "https://www.newadvent.org/cathen/07543b.htm",
  },
  {
    citation:
      "Chương VII. Khiêm nhường - Augustinô (truy cập 28/03/2026)",
    href: "https://augustino.net/nhan-biet-tinh-yeu-doi-voi-thien-chua-chuong-07",
  },
  {
    citation: "Kenosis - Fuller Theological Seminary (truy cập 28/03/2026)",
    href: "https://fuller.edu/next-faithful-step/resources/kenosis/",
  },
  {
    citation: "Phil 2:5 - 11 The Kenosis - Logos Sermons (truy cập 28/03/2026)",
    href: "https://sermons.faithlife.com/sermons/271810-phil-2:5-11-the-kenosis",
  },
  {
    citation:
      "Greatness, Humility, Servanthood - Desiring God (truy cập 28/03/2026)",
    href: "https://www.desiringgod.org/messages/greatness-humility-servanthood",
  },
  {
    citation:
      "Philippians 2:5-11 Commentary - Center for Excellence in Preaching (truy cập 28/03/2026)",
    href: "https://cepreaching.org/commentary/2016-03-14/philippians-25-11-3/",
  },
  {
    citation:
      "Christ Hymn in Philippians 2:5-11 & Kenosis leadership - Regent University (truy cập 28/03/2026)",
    href: "https://www.regent.edu/journal/journal-of-biblical-perspectives-in-leadership/christ-hymn-philippians-2/",
  },
  {
    citation:
      "THẬP GIÁ VÀ BA NGÔI THEO HANS URS VON BALTHASAR - HDGM Việt Nam (truy cập 28/03/2026)",
    href: "https://hdgmvietnam.com/chi-tiet/thap-gia-va-ba-ngoi-theo-hans-urs-von-balthasar-50537",
  },
  {
    citation:
      "Hans Urs von Balthasar - VietCatholic News (truy cập 28/03/2026)",
    href: "http://vietcatholic.net/News/Html/272009.htm",
  },
  {
    citation:
      "Bài học khiêm nhường rửa chân - daobinh.com (truy cập 28/03/2026)",
    href: "https://www.daobinh.com/song-dao/chia-se-tam-linh/bai-hoc-khiem-nhuong-rua-chan-cua-chua-giesu-day-cach-rat-ro-rang.htm",
  },
  {
    citation:
      "The Power and Wisdom of the Cross - Banner of Truth (truy cập 28/03/2026)",
    href: "https://banneroftruth.org/us/resources/articles/2014/power-wisdom-cross/",
  },
  {
    citation:
      "The Power and Message of the Cross - Truth For Life (truy cập 28/03/2026)",
    href: "https://www.truthforlife.org/resources/sermon/power-and-message-cross/",
  },
  {
    citation:
      "Deus caritas est - The Holy See / Benedict XVI (truy cập 28/03/2026)",
    href: "https://www.vatican.va/content/benedict-xvi/en/encyclicals/documents/hf_ben-xvi_enc_20051225_deus-caritas-est.html",
  },
  {
    citation:
      "Cherishing Pope Benedict's humility - Rhode Island Catholic (truy cập 28/03/2026)",
    href: "https://www.thericatholic.com/stories/cherishing-pope-benedicts-humility-truth-and-gentleness,13480",
  },
  {
    citation:
      "Pope Benedict XVI offers lesson in humility - Catholic Review (truy cập 28/03/2026)",
    href: "https://catholicreview.org/pope-benedict-xvi-offers-lesson-in-humility/",
  },
  {
    citation:
      "Pope Benedict XVI: Humility and the Man - Religion News (truy cập 28/03/2026)",
    href: "https://religionnews.com/2005/04/26/news-feature-profile-pope-benedict-xvi-humility-and-the-man/",
  },
  {
    citation:
      "The Power of Reason: Benedict XVI and the Classics - Antigone (truy cập 28/03/2026)",
    href: "https://antigonejournal.com/2023/01/benedict-xvi-and-classics/",
  },
  {
    citation:
      "Humility, not showing off, is the Christian way of life - Catholic Telegraph (truy cập 28/03/2026)",
    href: "https://www.thecatholictelegraph.com/humility-not-showing-off-is-the-christian-way-of-life-pope-says/63235",
  },
  {
    citation:
      "Humility - Pope Francis Homilies (truy cập 28/03/2026)",
    href: "https://www.popefrancishomilies.com/humility",
  },
  {
    citation:
      "Three traits - The Holy See / Francis (truy cập 28/03/2026)",
    href: "https://www.vatican.va/content/francesco/en/cotidie/2015/documents/papa-francesco-cotidie_20151215_three-traits.html",
  },
  {
    citation:
      "Humility is the 'gateway to all virtues' - USCCB (truy cập 28/03/2026)",
    href: "https://www.usccb.org/news/2024/humility-gateway-all-virtues-pope-says",
  },
  {
    citation:
      "Khiêm Nhường — Đặc tính - Cursillo Portland (truy cập 28/03/2026)",
    href: "https://pdxcursilloviet.org/khiem-nhuong-cac-dac-tinh-cua-duc-khiem-nhuong",
  },
  {
    citation:
      "Pride and Humility - C.S. Lewis Institute (truy cập 28/03/2026)",
    href: "https://www.cslewisinstitute.org/resources/pride-and-humility/",
  },
  {
    citation:
      "Pride and Humility at War - DTS Voice (truy cập 28/03/2026)",
    href: "https://voice.dts.edu/article/pride-and-humility-at-war/",
  },
  {
    citation:
      "God-Mediated Control and Humility in Later Life - PMC (truy cập 28/03/2026)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9628441/",
  },
  {
    citation:
      "The First Two Degrees of Humility - IgnatianSpirituality.com (truy cập 28/03/2026)",
    href: "https://www.ignatianspirituality.com/ignatian-prayer/the-spiritual-exercises/the-first-two-degrees-of-humility/",
  },
  {
    citation:
      "The Rule of Saint Benedict: Chapter Seven - The Mediaeval Monk (truy cập 28/03/2026)",
    href: "https://themediaevalmonk.wordpress.com/2020/02/16/the-rule-of-saint-benedict-part-8-chapter-seven-how-to-be-humble-like-a-medieval-monk-in-12-easy-and-certainly-not-at-all-creepy-steps/",
  },
  {
    citation:
      "Rule of St. Benedict: 12 Steps (Regent, fragment) (truy cập 28/03/2026)",
    href: "https://www.regent.edu/journal/inner-resources-for-leaders/rule-of-st-benedict-12-steps-of-humility-in-leadership/",
  },
  {
    citation:
      "Fridays with Benedict: Chapter 7, Ladder of Humility - Experimental Theology (truy cập 28/03/2026)",
    href: "http://experimentaltheology.blogspot.com/2013/02/fridays-with-benedict-chapter-7-ladder.html",
  },
  {
    citation:
      "Rule of St. Benedict: 12 Steps of Humility & Leadership - Regent University (truy cập 28/03/2026)",
    href: "https://www.regent.edu/journal/inner-resources-for-leaders/rule-of-st-benedict-12-steps-of-humility-in-leadership/",
  },
  {
    citation:
      "Humility According to the Rule of St. Benedict, Part Seven - Holy Cross Abbey (truy cập 28/03/2026)",
    href: "https://www.virginiatrappists.org/2014/05/humility-according-to-the-rule-of-st-benedict-part-seven/",
  },
  {
    citation:
      "Three Ways of Humility - My Catholic Life! (truy cập 28/03/2026)",
    href: "https://mycatholic.life/books/ignatius/part-two-ignatian-meditations-arranged-according-to-the-liturgical-year/meditations-for-ordinary-time/three-ways-of-humility/",
  },
  {
    citation:
      "Cùng 12 vị thánh sống hiền lành & khiêm nhường - HDGM Việt Nam (truy cập 28/03/2026)",
    href: "https://hdgmvietnam.com/chi-tiet/cung-12-vi-thanh-tap-song-hien-lanh-khiem-nhuong-giong-chua-giesu-51239",
  },
  {
    citation:
      "Lent with St. Francis — Humility and Obedience - Corpus Christi Phoenix (truy cập 28/03/2026)",
    href: "http://www.corpuschristiphx.org/blog?month=202402&id=1970668598&cat=931661708",
  },
  {
    citation:
      "Tại sao khiêm nhường quan trọng trong đời sống Thánh Hiến - daminhtamhiep.net (truy cập 28/03/2026)",
    href: "https://daminhtamhiep.net/2025/03/tai-sao-khiem-nhuong-lai-quan-trong-trong-doi-song-thanh-hien/",
  },
  {
    citation:
      "Sự nghiệp Hans Urs von Balthasar - VietCatholic (truy cập 28/03/2026)",
    href: "https://vietcatholic.net/News/Html/272302.htm",
  },
  {
    citation:
      "Meditations on Humility Protect Us from Temptation - Catholic Mom (truy cập 28/03/2026)",
    href: "https://www.catholicmom.com/articles/meditations-on-humility-protect-us-from-temptation",
  },
  {
    citation:
      "HUMILITY — Thirty Short Meditations (Richard F. Clarke, S.J.) - e-Catholic 2000 (truy cập 28/03/2026)",
    href: "https://www.ecatholic2000.com/cts/untitled-214.shtml",
  },
];

export const references: ReferenceEntry[] = raw.map((r, i) => ({
  n: i + 1,
  ...r,
}));
