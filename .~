# ZIVORA Admin Panel — Setup Guide (Hinglish)

Ye guide follow karo taaki aapka `/admin` panel kaam kare — jaha se aap login karke products add/edit/delete kar sako, aur wo turant live website pe dikhein.

Total time: ~10 minute. Credit card ki zaroorat nahi (Supabase free plan use kar rahe hain).

---

## Step 1 — Supabase account banao

1. https://supabase.com kholo, **"Start your project"** pe click karo
2. GitHub account se sign up kar sakte ho (fastest), ya email se
3. Login hone ke baad **"New Project"** pe click karo
4. Details bharo:
   - **Name**: `zivora` (kuch bhi rakh sakte ho)
   - **Database Password**: ek strong password banao aur **kahin save kar lo** (baad mein chahiye ho sakta hai)
   - **Region**: jo aapke closest ho (e.g. Mumbai/Singapore)
5. **"Create new project"** pe click karo — 1-2 minute wait karo project ready hone tak

---

## Step 2 — Database table banao (SQL run karo)

1. Left sidebar mein **SQL Editor** pe click karo
2. **"New query"** pe click karo
3. Apne project ke `supabase/schema.sql` file ko kholo (jo maine diya hai), **poora content copy karo**
4. Supabase ke SQL Editor mein paste karo
5. Right side neeche **"Run"** button (ya Ctrl+Enter) dabao
6. "Success. No rows returned" jaisa message dikhna chahiye — matlab table ban gaya, aur 8 sample products bhi add ho gaye

Agar koi error aaye, screenshot bhej dena.

---

## Step 3 — API keys copy karo

1. Left sidebar mein **Settings** (gear icon) → **API** pe jao
2. Do cheezein copy karni hain:
   - **Project URL** (kuch aisa dikhega: `https://abcdxyz.supabase.co`)
   - **Project API keys** section mein **`anon` `public`** wali key (lambi si string)

---

## Step 4 — In values ko `.env` file mein daalo

Apne project ke root folder mein `.env` file kholo, sabse neeche ye 2 lines dikhengi:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Inko fill karo (jo Step 3 mein copy kiya tha):

```
VITE_SUPABASE_URL=https://abcdxyz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...(lambi wali key)
```

Save karo.

---

## Step 5 — Apna admin login (email + password) banao

1. Supabase dashboard mein, left sidebar → **Authentication** → **Users**
2. **"Add user"** → **"Create new user"** pe click karo
3. Apna email aur ek password daalo (ye wahi email/password hoga jisse aap `/admin` panel mein login karoge)
4. **"Auto Confirm User"** ka checkbox ON rakhna (zaroori hai, warna login nahi hoga)
5. **"Create user"** pe click karo

Ye email/password yaad rakho — isi se `shipzivora.in/admin/login` pe login karoge.

---

## Step 6 — Local pe test karo

Terminal mein:
```bash
npm install
npm run dev
```

Browser mein kholo: `http://localhost:5173/admin/login`

Step 5 wala email/password daal ke login karo. Agar sahi hai to Dashboard khulega jisme 8 sample products dikhenge (jo Step 2 mein SQL se aaye the).

Test karo:
- **"+ Add Product"** pe click karke ek naya product add karo (photo, price, sab)
- Save karne ke baad website ke **Shop** page pe jao — naya product wahan bhi dikhna chahiye
- Kisi product ko **Delete** karke check karo wo Shop se hat gaya

---

## Step 7 — Live website (shipzivora.in) ke liye Vercel mein bhi ye values add karo

Local `.env` file sirf aapke computer ke liye hai — live site (Vercel) ko alag se batana padega:

1. https://vercel.com pe login karo, apna `Zivora` project kholo
2. **Settings** → **Environment Variables**
3. Do naye variables add karo:
   - Name: `VITE_SUPABASE_URL`, Value: (Step 3 wala URL)
   - Name: `VITE_SUPABASE_ANON_KEY`, Value: (Step 3 wali key)
4. Save karo

---

## Step 8 — GitHub pe push karo

```bash
git add .
git commit -m "Add admin panel for product management"
git push origin main
```

Push karne ke 2-3 minute baad Vercel naya deployment banayega. Fir `https://shipzivora.in/admin/login` khol ke live site pe bhi login test kar lena.

---

## Roz-marra use (future mein)

Jab bhi product add/edit/remove karna ho:
1. `shipzivora.in/admin/login` kholo
2. Email/password se login karo
3. Add / Edit / Delete karo — **turant** live website pe reflect hoga, koi code/deploy nahi karna padega
4. Website designer ko bhi bas ye same login de sakte ho — usko coding ki zaroorat nahi padegi

## Security note

- `/admin` route login ke bina accessible nahi hai — koi bhi visitor products edit nahi kar sakta
- Apna admin email/password kisi ke saath share mat karo jise trust na karte ho
- Agar future mein multiple team members ko access dena ho, Supabase → Authentication → Users mein aur users add kar sakte ho (Step 5 jaisa)
