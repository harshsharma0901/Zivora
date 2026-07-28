-- ============================================================
-- ZIVORA — Supabase database setup
-- Run this ENTIRE file once, in Supabase Dashboard → SQL Editor → New query → Run
-- ============================================================

-- 1. Products table
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  collection text,
  category text not null,
  price numeric not null,
  compare_at numeric,
  rating numeric default 5,
  reviews_count integer default 0,
  best_seller boolean default false,
  material text,
  description text,
  details text[] default '{}',
  images text[] default '{}',
  created_at timestamptz default now()
);

-- 2. Row Level Security: anyone can READ products (public shop pages),
--    but only a logged-in (authenticated) admin can add/edit/delete.
alter table products enable row level security;

create policy "Public can view products"
  on products for select
  using (true);

create policy "Authenticated users can insert products"
  on products for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update products"
  on products for update
  to authenticated
  using (true);

create policy "Authenticated users can delete products"
  on products for delete
  to authenticated
  using (true);

-- 3. Storage bucket for product photos uploaded from the admin panel
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

create policy "Public can view product images"
  on storage.objects for select
  using (bucket_id = 'product-images');

create policy "Authenticated users can upload product images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-images');

create policy "Authenticated users can delete product images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-images');

-- 4. Seed data — migrates your existing 8 sample products so the site
--    isn't empty on first load. Feel free to delete these later from
--    the admin panel once you add your real products.
insert into products (name, collection, category, price, compare_at, rating, reviews_count, best_seller, material, description, details, images) values
('Aurelia Halo Ring', 'aurelia', 'Rings', 128000, 145000, 4.9, 132, true, '18K Rose Gold, VVS Diamond',
 'A radiant halo of pavé diamonds encircling a brilliant-cut centre stone, hand-set in warm 18K rose gold.',
 ARRAY['18K solid rose gold band', 'VVS1 clarity centre diamond, 0.9ct', 'Pavé halo, 0.35ct total', 'Comes with lifetime resizing'],
 ARRAY['https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&h=1100&q=80']),

('Lumière Noire Cuff', 'lumiere', 'Bracelets', 96000, null, 4.8, 84, true, 'Blackened Platinum, Black Diamond',
 'A sculptural open cuff in blackened platinum, lined with a river of black diamonds.',
 ARRAY['Blackened platinum finish', 'Black diamond pavé, 1.2ct total', 'Adjustable open cuff fit'],
 ARRAY['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&h=1100&q=80']),

('Pétale Drop Earrings', 'petale', 'Earrings', 74000, null, 4.9, 201, true, '18K Rose Gold, Morganite',
 'Petal-formed drops in brushed rose gold, each set with a blush morganite stone.',
 ARRAY['18K rose gold, brushed finish', 'Morganite, 1.4ct each', 'Secure butterfly backing'],
 ARRAY['https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&h=1100&q=80']),

('Eterna Bridal Band', 'eterna', 'Rings', 154000, null, 5.0, 58, false, 'Platinum, Diamond',
 'A continuous eternity band, hand-channel-set with round brilliant diamonds.',
 ARRAY['950 platinum band', 'Channel-set diamonds, 1.8ct total', 'Comfort-fit interior'],
 ARRAY['https://images.unsplash.com/photo-1602752275849-8f38b437b3fb?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1587467512961-120760940315?auto=format&fit=crop&w=900&h=1100&q=80']),

('Aurelia Chain Necklace', 'aurelia', 'Necklaces', 88000, null, 4.7, 96, false, '18K Gold',
 'A sculpted link chain in warm 18K gold, substantial enough to wear alone.',
 ARRAY['18K solid gold', 'Hand-finished links', '18-inch length, adjustable clasp'],
 ARRAY['https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&h=1100&q=80']),

('Lumière Solitaire Pendant', 'lumiere', 'Necklaces', 112000, null, 4.9, 73, true, 'Blackened Gold, Black Diamond',
 'A single black diamond solitaire, suspended from a fine blackened gold chain.',
 ARRAY['Blackened 18K gold', 'Black diamond, 0.75ct', '16-inch chain with 2-inch extender'],
 ARRAY['https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1602751584547-91a2a09e2543?auto=format&fit=crop&w=900&h=1100&q=80']),

('Pétale Stacking Ring Set', 'petale', 'Rings', 62000, null, 4.8, 145, false, '18K Rose Gold',
 'Three slender petal-textured bands, designed to be worn together or apart.',
 ARRAY['Set of 3 stacking bands', '18K rose gold', 'Mixed textured + polished finish'],
 ARRAY['https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&h=1100&q=80']),

('Eterna Tennis Bracelet', 'eterna', 'Bracelets', 168000, null, 5.0, 41, false, 'Platinum, Diamond',
 'A classic tennis line of round brilliant diamonds, claw-set in platinum.',
 ARRAY['950 platinum setting', 'Diamonds, 4.2ct total', 'Box clasp with safety catch'],
 ARRAY['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&h=1100&q=80', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&h=1100&q=80']);

-- Done! Next steps are in ADMIN_SETUP.md
