export default function call (dao, provider, _, msg) {
  const params = {
    to: msg.chat,
    text: _([
      _(':globe_with_meridians: TeleMMO version %s', VERSION),
      '',
      _('Github: http://github.com/telemmo/telemmo'),
      _('Reddit: http://reddit.com/r/telemmo'),
      _('Telegram: @telemmo'),
    ].join('\n')),
  }

  return Promise.resolve(params)
}

