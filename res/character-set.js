var independent_vowels = {
    "short_a" : "\u0904", //Letter Short A
    "a" : "\u0905", //Letter A
    "aa" : "\u0906", //Letter AA
    "i" : "\u0907", //Letter I
    "ii" : "\u0908", //Letter II
    "u" : "\u0909", //Letter U
    "uu" : "\u090A", //Letter UU
    "vocalic_r" : "\u090B", //Letter Vocalic R
    "vocalic_l" : "\u090C", //Letter Vocalic L
    "candra_e" : "\u090D", //Letter Candra E
    "short_e" : "\u090E", //Letter Short E
    "e" : "\u090F", //Letter E
    "ai" : "\u0910", //Letter AI
    "candra_o" : "\u0911", //Letter Candra O
    "short_o" : "\u0912", //Letter Short O
    "o" : "\u0913", //Letter O
    "au" : "\u0914", //Letter AU

    //Additional vowels for Sanskrit
    "vocalic_rr" : "\u0960", //Letter Vocalic RR
    "vocalic_ll" : "\u0961", //Letter Vocalic LL

    //Independent vowel for Marathi
    "candra_a" : "&3x0972" //Letter Candra A
};

var consonants = {
    "ka" : "\u0915", //Letter KA
    "kha" : "\u0916", //Letter KHA
    "ga" : "\u0917", //Letter GA
    "gha" : "\u0918", //Letter GHA
    "nga" : "\u0919", //Letter NGA
    "ca" : "\u091A", //Letter CA
    "cha" : "\u091B", //Letter CHA
    "ja" : "\u091C", //Letter JA
    "jha" : "\u091D", //Letter JHA
    "nya" : "\u091E", //Letter NYA
    "tta" : "\u091F", //Letter TTA
    "ttha" : "\u0920", //Letter TTHA
    "dda" : "\u0921", //Letter DDA
    "ddha" : "\u0922", //Letter DDHA
    "nna" : "\u0923", //Letter NNA
    "ta" : "\u0924", //Letter TA
    "tha" : "\u0925", //Letter THA
    "da" : "\u0926", //Letter DA
    "dha" : "\u0927", //Letter DHA
    "na" : "\u0928", //Letter NA
    "nnna" : "\u0929", //Letter NNNA, NA with nukta
    "pa" : "\u092A", //Letter PA
    "pha" : "\u092B", //Letter PHA
    "ba" : "\u092C", //Letter BA
    "bha" : "\u092D", //Letter BHA
    "ma" : "\u092E", //Letter MA
    "ya" : "\u092F", //Letter YA
    "ra" : "\u0930", //Letter RA
    "rra" : "\u0931", //Letter RRA, RA with nukta
    "la" : "\u0932", //Letter LA
    "lla" : "\u0933", //Letter LLA
    "llla" : "\u0934", //Letter LLLA, LLA with nukta
    "va" : "\u0935", //Letter VA
    "sha" : "\u0936", //Letter SHA
    "ssa" : "\u0937", //Letter SSA
    "sa" : "\u0938", //Letter SA
    "ha" : "\u0939", //Letter HA

    //Additional consonants
    "qa" : "\u0958", //Letter QA, KA with nukta
    "khha" : "\u0959", //Letter KHHA, KHA with nukta
    "ghha" : "\u095A", //Letter GHHA, GA with nukta
    "za" : "\u095B", //Letter ZA, JA with nukta
    "dddha" : "\u095C", //Letter DDDHA, DDA with nukta
    "rha" : "\u095D", //Letter RHA, DDHA with nukta
    "fa" : "\u095E", //Letter FA, PHA with nukta
    "yya" : "\u095F" //Letter YYA, YA with nukta
};

var dependent_vowels = {
    "aa" : "\u093E", //Vowel Sign AA
    "i" : "\u093F", //Vowel Sign I
    "ii" : "\u0940", //Vowel Sign II
    "u" : "\u0941", //Vowel Sign U
    "uu" : "\u0942", //Vowel Sign UU
    "vocalic_r" : "\u0943", //Vowel Sign Vocalic R
    "vocalic_rr" : "\u0944", //Vowel Sign Vocalic RR
    "candra_e" : "\u0945", //Vowel Sign Candra E
    "short_e" : "\u0946", //Vowel Sign Short E
    "e" : "\u0947", //Vowel Sign E
    "ai" : "\u0948", //Vowel Sign AI
    "candra_o" : "\u0949", //Vowel Sign Candra O
    "short_o" : "\u094A", //Vowel Sign Short O
    "o" : "\u094B", //Vowel Sign O
    "au" : "\u094C", //Vowel Sign AU

    //Additional vowel signs for Sanskrit
    "vocalic_l" : "\u0962", //Vowel sign Vocalic L
    "vocalic_ll" : "\u0963" //Vowel sign Vocalic LL
};

var various_signs = {
    "candrabindu" : "\u0901", //Sign Candrabindu
    "anusvara" : "\u0902", //Sign Anusvara
    "visarga" : "\u0903" //Sign Visarga
};

var virama = "\u094D"; //Sign Virama (Halant)

var reph= "\u0930\u094D"; //RA + Virama