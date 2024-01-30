<template>
    <div>
        PDF Output <button @click="download">Download</button>
    </div>
    <iframe ref="iframe" width="100%" height="800px"></iframe>
</template>

<script>
/* global PDFDocument, blobStream */

import { ref, onMounted } from 'vue';
export default {
    name: 'PdfGenerator',

    setup() {
        const iframe = ref(null);
        let blob = null;

        onMounted(() => {
            // Assuming PDFDocument and blobStream are available globally
            const doc = new PDFDocument();
            const stream = doc.pipe(blobStream());

            console.log(doc)

            // Add content to the document
            doc.fontSize(25).text("Some text with standard font!", 100, 100);
            doc.addPage().fontSize(25).text("Here is some vector graphics...", 100, 100);
            doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");
            doc.scale(0.6).translate(470, -380).path("M 250,75 L 323,301 131,161 369,161 177,301 z").fill("red", "even-odd").restore();
            doc.addPage().fillColor("blue").text("Here is a link!", 100, 100).underline(100, 100, 160, 27, { color: "#0000FF" }).link(100, 100, 160, 27, "http://google.com/");
            doc.end();

            stream.on("finish", function() {
                blob = stream.toBlob("application/pdf");
                const url = stream.toBlobURL("application/pdf");
                iframe.value.src = url;
            });
        });

        function download() {
            if (!blob) return;
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'test.pdf';
            a.click();
            window.URL.revokeObjectURL(url);
        }

        return { download, iframe };
    }
};
</script>

<style>
/* Add your styles here */
</style>
