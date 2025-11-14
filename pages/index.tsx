import React from 'react';

const sampleMentors = [
  {
    id: 1,
    name: '田中 太郎',
    job: '精密溶接技師',
    skills: ['溶接', 'TIG', '図面読解'],
    rating: 4.8,
    distance: '2.4km',
    online: false,
    badge: '市認定',
  },
  {
    id: 2,
    name: '佐藤 花子',
    job: '旋盤オペレーター',
    skills: ['旋盤', '加工', '品質管理'],
    rating: 4.6,
    distance: '5.1km',
    online: true,
    badge: '',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SearchCard />

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">おすすめメンター</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sampleMentors.map((m) => (
                  <MentorCard key={m.id} mentor={m} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">検索結果マップ（プレビュー）</h3>
              <div className="h-56 rounded-lg bg-white shadow-sm border flex items-center justify-center text-sm text-gray-400">
                マップコンポーネントをここに埋め込みます（例: Leaflet / Mapbox）
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <ProfileSummary />
            <CTABox />
            <QuickFilters />
          </aside>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">メッセージ（モック）</h3>
          <MessageMock />
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">東</div>
            <div>
              <div className="font-semibold">東大阪スキル継承</div>
              <div className="text-xs text-gray-500">メンターとラーナーを繋げる</div>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <button className="text-sm px-3 py-1 rounded-md hover:bg-gray-100">ログイン</button>
            <button className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md">登録（無料）</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-6 flex flex-col md:flex-row items-start gap-6 shadow-sm">
      <div className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold">技術を次世代へ — 東大阪の職人と学びたい人をつなぐ</h1>
        <p className="mt-2 text-gray-600">短期の見学から就業まで。地元で技能を守る・学ぶ・働くを一つの場所で。</p>

        <div className="mt-4 flex gap-3">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium">企業を探す</button>
          <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md">自分で登録する</button>
        </div>
      </div>

      <div className="w-full md:w-72 bg-white rounded-lg p-4 shadow-sm border">
        <div className="text-sm font-medium text-gray-700">今日のイベント</div>
        <div className="mt-3 text-sm text-gray-500">・ものづくりワークショップ（市民会館） 18:00〜</div>
        <div className="mt-4 text-xs text-gray-400">※ パイロット運用では市と連携してイベントを掲載します</div>
      </div>
    </div>
  );
}

function SearchCard() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input className="md:col-span-2 p-2 rounded border" placeholder="技能・職種を入力（例：溶接、旋盤）" />
        <select className="p-2 rounded border">
          <option>東大阪市内</option>
          <option>近隣市町村</option>
        </select>
        <div className="flex gap-2">
          <button className="bg-indigo-600 text-white px-3 py-2 rounded-md">検索</button>
          <button className="border px-3 py-2 rounded-md">詳細フィルタ</button>
        </div>
      </form>
    </div>
  );
}

function MentorCard({ mentor }: { mentor: any }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-medium">{mentor.name.slice(0,2)}</div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold">{mentor.name} <span className="text-sm text-gray-500">({mentor.job})</span></div>
            <div className="text-xs text-gray-500 mt-1">{mentor.skills.join(' ・ ')}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">⭐ {mentor.rating}</div>
            <div className="text-xs text-gray-400">{mentor.distance}</div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {mentor.badge ? <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{mentor.badge}</span> : null}
          <span className="text-xs px-2 py-1 rounded border">{mentor.online ? 'オンライン可' : '対面中心'}</span>
          <button className="ml-auto bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">メッセージ</button>
        </div>
      </div>
    </div>
  );
}

function ProfileSummary() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold">あなたのプロフィール</div>
          <div className="text-xs text-gray-500">学びたい技能を登録してマッチングを受け取れます</div>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <div>希望職種: <strong>溶接</strong></div>
        <div>学習時間帯: <strong>平日夜・土日</strong></div>
      </div>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md">プロフィール編集</button>
    </div>
  );
}

function CTABox() {
  return (
    <div className="bg-gradient-to-r from-white to-indigo-50 rounded-lg p-4 shadow-sm border">
      <div className="font-semibold">市とのパイロット募集</div>
      <div className="text-sm text-gray-600 mt-2">東大阪市と一緒に試験運用を行うメンターを募集しています。</div>
      <button className="mt-3 bg-white border px-3 py-2 rounded-md w-full">参加申込はこちら</button>
    </div>
  );
}

function QuickFilters() {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm border">
      <div className="text-sm font-medium mb-2">クイックフィルタ</div>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2"><input type="checkbox" /> オンライン可</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> 市認定バッジのみ</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> 返信率80%以上</label>
      </div>
    </div>
  );
}

function MessageMock() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 border-r pr-4">
          <div className="text-sm font-medium mb-3">会話一覧</div>
          <div className="space-y-3">
            <div className="p-2 rounded hover:bg-gray-50">田中 太郎 — 面談希望</div>
            <div className="p-2 rounded hover:bg-gray-50">佐藤 花子 — オンライン相談</div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="h-40 overflow-auto p-3 bg-gray-50 rounded"> 
            <div className="mb-3">
              <div className="text-xs text-gray-500">田中 太郎 — 2日前</div>
              <div className="mt-1 bg-white p-2 rounded shadow">はじめまして。どの部分を学びたいですか？</div>
            </div>
            <div className="text-right mt-2">
              <div className="inline-block bg-indigo-600 text-white p-2 rounded shadow">溶接の基礎から実務まで学びたいです！</div>
            </div>
          </div>

          <form className="mt-3 flex gap-2">
            <input className="flex-1 p-2 rounded border" placeholder="メッセージを入力" />
            <button className="bg-indigo-600 text-white px-3 py-2 rounded-md">送信</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
        © 東大阪市スキル継承プラットフォーム（モック） ・ プライバシーと利用規約
      </div>
    </footer>
  );
}