-- Profiles table
create table profiles (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  created_at timestamp with time zone default now()
);

-- Twins table
create table twins (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references profiles(id),
  twin_name text not null,
  created_at timestamp with time zone default now()
);

-- Twin messages table
create table twin_messages (
  id uuid primary key default gen_random_uuid(),
  twin_id uuid references twins(id),
  sender text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Scheduled posts (optional for future)
create table scheduled_posts (
  id uuid primary key default gen_random_uuid(),
  twin_id uuid references twins(id),
  content text not null,
  scheduled_at timestamp with time zone not null
);

-- Memory vectors (for AI memory)
create table memory_vectors (
  id uuid primary key default gen_random_uuid(),
  twin_id uuid references twins(id),
  vector float8[] not null,
  created_at timestamp with time zone default now()
);
