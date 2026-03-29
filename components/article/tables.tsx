import { Ref } from "@/components/Ref";

const ANSELM_ROWS: [string, string, string][] = [
  [
    "Bậc 1",
    "Thừa nhận bản thân có những khía cạnh đáng bị khinh thường.",
    "Bước khởi đầu của lý trí, chấp nhận sự thật khách quan về sự bất toàn, yếu đuối và giới hạn của con người trước mặt Thiên Chúa.",
  ],
  [
    "Bậc 2",
    "Chấp nhận tình trạng bị khinh thường đó.",
    "Chuyển từ việc \"biết\" sự thật sang việc ý chí \"chấp thuận\", không phản kháng hay bào chữa cho sự thật đó.",
  ],
  [
    "Bậc 3",
    "Thú nhận công khai sự thấp hèn của mình.",
    "Tiêu diệt sự giả hình. Sẵn sàng gỡ bỏ lớp mặt nạ đạo đức giả và sự tự tôn trước mặt tha nhân.",
  ],
  [
    "Bậc 4",
    "Mong ước người khác tin vào sự thấp hèn của mình.",
    "Trừ tiệt ham muốn được đánh giá cao. Linh hồn mong muốn dư luận nhìn nhận đúng sự yếu kém của bản thân thay vì tâng bốc.",
  ],
  [
    "Bậc 5",
    "Kiên nhẫn chịu đựng khi người khác nói về sự đáng khinh của mình.",
    "Đối diện với sự chỉ trích, chê bai từ bên ngoài mà không nảy sinh thái độ oán hận, tức giận hay nỗ lực tự bào chữa.",
  ],
  [
    "Bậc 6",
    "Chấp nhận không e ngại khi bị đối xử như người đáng khinh.",
    "Hành động của người khác từ việc \"phán xét bằng lời\" nay biến thành \"hành vi hạ nhục thực tế\", nhưng linh hồn vẫn giữ sự bình an thẳm sâu.",
  ],
  [
    "Bậc 7",
    "Thực tâm mong muốn được đối xử theo cách đáng khinh.",
    "Cấp độ tiệm cận với sự hạ mình của Đức Kitô trên Thập Giá. Thánh Têrêsa Avila coi đây là một ân huệ siêu nhiên từ Thiên Chúa ban cho các bậc thánh thiện.",
  ],
];

const BENEDICT_ROWS: [string, string, string][] = [
  [
    "1",
    "Giữ lòng kính sợ Thiên Chúa liên lỉ.",
    "Cảnh giác trước mọi tội lỗi trong tư tưởng, lời nói, hành động. Ý thức rằng Thiên Chúa hằng thấu suốt mọi sự từ trời cao và các thiên thần báo cáo mọi hành động. Điều này rèn luyện sự chính trực tuyệt đối trong cả nơi công khai lẫn chốn riêng tư.",
  ],
  [
    "2",
    "Khước từ ý riêng và dục vọng.",
    "Không yêu chiều ý muốn cá nhân hay tìm sự thỏa mãn xác thịt. Mọi hành động đều hướng tới việc noi gương Chúa Giêsu, Đấng tuyên bố: \"Tôi đến không phải để làm theo ý tôi, mà là ý Đấng đã sai tôi\".",
  ],
  [
    "3",
    "Vâng phục bề trên tuyệt đối.",
    "Tự nguyện tùng phục quyền bính hợp pháp của con người vì tình yêu sâu thẳm dành cho Thiên Chúa, bắt chước sự vâng lời cho đến chết của Đức Kitô.",
  ],
  [
    "4",
    "Kiên nhẫn trong gian khổ và bất công.",
    "Đón nhận các điều kiện khó khăn, sự đối xử bất công mà lòng không hề tháo lui hay tìm cách trốn chạy. Ôm lấy sự chịu đựng một cách thầm lặng như chiên bị đem đi xén lông.",
  ],
  [
    "5",
    "Xưng thú mọi tội lỗi thầm kín.",
    "Minh bạch tuyệt đối về đời sống nội tâm. Linh hồn phải mở lòng với bề trên (viện phụ) về mọi tư tưởng xấu xa, cám dỗ hay những lỗi lầm giấu kín nhất để được thanh tẩy.",
  ],
  [
    "6",
    "Bằng lòng với sự tồi tàn, hèn kém nhất.",
    "Chấp nhận các điều kiện sống, thức ăn, áo mặc thấp kém nhất. Tự coi mình là một người thợ tồi tệ, vô giá trị và không xứng đáng với bất cứ ân huệ nào.",
  ],
  [
    "7",
    "Tự nhận mình thấp hèn hơn tất cả thụ tạo.",
    "Không chỉ nói lời khiêm tốn ngoài miệng mà thực sự xác tín trong sâu thẳm tâm hồn rằng mình thấp kém hơn mọi người, lặp lại tâm tình của Vua Đavít: \"Tôi là giun dế chứ đâu phải người\".",
  ],
  [
    "8",
    "Tuân thủ lề luật chung một cách nghiêm ngặt.",
    "Từ bỏ mong muốn nổi bật hay làm những việc đạo đức kỳ dị. Không làm gì ngoài những điều được quy định chặt chẽ trong Tu luật đan viện và noi theo gương sáng của các bậc tiền nhân.",
  ],
  [
    "9",
    "Giữ sự im lặng và làm chủ cái lưỡi.",
    "Kiểm soát ngôn từ, chỉ lên tiếng khi được hỏi. Triệt tiêu sự kiêu ngạo thường ẩn náu qua việc thích thể hiện ý kiến, tranh luận hay chứng tỏ sự khôn ngoan của bản thân.",
  ],
  [
    "10",
    "Tiết chế cảm xúc, không dễ dãi cười cợt.",
    "Tránh thái độ nông nổi, hời hợt hoặc những tiếng cười ồn ào vô duyên. Duy trì sự điềm tĩnh và nghiêm trang của một tâm hồn đang đối diện với Mầu nhiệm Thánh.",
  ],
  [
    "11",
    "Nói năng từ tốn, khiêm tốn và ít lời.",
    "Khi buộc phải nói, lời lẽ phải ngắn gọn, nghiêm túc, khiêm tốn, không lớn tiếng hay la hét. Thực hành nguyên tắc của người xưa: \"Người khôn ngoan được nhận biết qua sự ít lời của họ\".",
  ],
  [
    "12",
    "Thể hiện sự khiêm nhường ra tư thế bên ngoài.",
    "Sự khiêm tốn trong tim phải tràn ra ngoài thân xác. Dù ở nhà nguyện, ngoài đồng hay trên đường đi, đầu luôn cúi, mắt nhìn xuống đất, liên lỉ phản ánh sự tan nát của cõi lòng tội lỗi trước mặt đấng phán xét tối cao.",
  ],
];

export function AnselmDegreesTable() {
  return (
    <>
      <div className="not-prose overflow-x-auto my-8">
        <table className="data-table">
          <thead>
            <tr>
              <th>Cấp độ</th>
              <th>Sự chuyển biến nội tâm</th>
              <th>Phân tích ý nghĩa tâm linh</th>
            </tr>
          </thead>
          <tbody>
            {ANSELM_ROWS.map((row) => (
              <tr key={row[0]}>
                <td className="font-sans font-semibold text-st-joseph whitespace-nowrap">{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-ink-muted">
        Bảng tóm tắt hệ thống Anselmô — Tôma; chi tiết luận giải xem chú thích <Ref n={6} />.
      </p>
    </>
  );
}

export function BenedictLadderTable() {
  return (
    <div className="not-prose overflow-x-auto my-8">
      <table className="data-table text-[0.85rem]">
        <thead>
          <tr>
            <th>Bậc</th>
            <th>Biểu hiện thực hành nội tâm &amp; ngoại tại</th>
            <th>Chiều kích suy niệm &amp; hành động biến đổi</th>
          </tr>
        </thead>
        <tbody>
          {BENEDICT_ROWS.map((row) => (
            <tr key={row[0]}>
              <td className="font-sans font-bold text-st-joseph whitespace-nowrap w-10">{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
