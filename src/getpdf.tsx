import $ from "jquery";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';



export default function getPDF() {
  const HTML_Width = $(".canvas_div_pdf").width() as number;
  const HTML_Height = $(".canvas_div_pdf").height() as number;
  const top_left_margin = 0;
  const PDF_Width = HTML_Width + top_left_margin * 2;
  const PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  const canvas_image_width = HTML_Width;
  const canvas_image_height = HTML_Height;

  const totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  htmlToImage.toCanvas($(".canvas_div_pdf")[0] as HTMLCanvasElement)
  .then(function (canvas) {

    canvas.getContext("2d") as CanvasRenderingContext2D;

    console.log(canvas.height + "  " + canvas.width);

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF("p", "pt", [1675, 1184]);
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );

    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage([1675, 1184]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      );
    }

    pdf.save("HTML-Document.pdf");
  });
}
