import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZGJldG1uZXJlbXFhYWd4Y2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0Njc2MjEsImV4cCI6MjA3MjA0MzYyMX0.97PJmhCdhUSegf1m7fqqUtsRDlY04EpDV3qjMgfr5UI`;
const url = "https://ckdbetmneremqaagxcbv.supabase.co";

const supabase = createClient(url, key);


export default function uploadMediaToSupabase(file) {
    return new Promise((resolve, reject) => {
        if (file == null) {
            reject("File not added");
        }
        let fileName = file.name;
        const extension = fileName.split(".")[fileName.split(".").length - 1];

        const timestamp = new Date().getTime();

        fileName = timestamp + file.name + "." + extension;

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
        }).then(() => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch((err) => {
            reject(err);
        });
    });
}
