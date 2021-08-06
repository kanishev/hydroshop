<template>
  <form action="">
    <div class="card__top">
      <label class="card__label-search" for="card"
        >Магазин
        <input
          class="card__input-search"
          type="text"
          name="card"
          placeholder="Искать по магазинам"
        />
      </label>
      <label class="card__label-pickup" for="card">
        <input class="filter-style" type="radio" name="card" />
        Забрать сегодня
      </label>
      <label class="card__label-pickup" for="card">
        <input class="filter-style" type="radio" name="card" checked />
        Забрать в течение недели
      </label>
    </div>

    <table>
      <thead>
        <tr>
          <th>Адрес</th>
          <th>Режим работы</th>
          <th>Доступно</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Москва, ул. Науки 25</td>
          <td>
            <p class="table-date">
              пн-сб: <span class="table-time"> 08:00-19:00 </span>
            </p>
            <p class="table-date">
              вс: <span class="table-time">09:00-17:00</span>
            </p>
          </td>
          <td>В наличии</td>
          <td>1</td>
          <td>
            <div class="card-list__btn">
              <button type="submit">Купить</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Москва, ул. Южная 134</td>
          <td>
            <p class="table-date">
              пн-сб: <span class="table-time"> 08:00-19:00 </span>
            </p>
            <p class="table-date">
              вс: <span class="table-time">09:00-17:00</span>
            </p>
          </td>
          <td>В наличии</td>
          <td>2</td>
          <td>
            <div class="card-list__btn">
              <button type="submit">Купить</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Санкт-Петербург, ул. Красная 19</td>
          <td>
            <p class="table-date">
              пн-сб: <span class="table-time"> 08:00-19:00 </span>
            </p>
            <p class="table-date">
              вс: <span class="table-time">09:00-17:00</span>
            </p>
          </td>
          <td>Нет в наличии</td>
          <td>0</td>
          <td>
            <div class="card-list__btn">
              <button type="submit" disabled>Купить</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Киев, ул Шевченко 167</td>
          <td>
            <p class="table-date">
              пн-сб: <span class="table-time"> 08:00-19:00 </span>
            </p>
            <p class="table-date">
              вс: <span class="table-time">09:00-17:00</span>
            </p>
          </td>
          <td>Нет в наличии</td>
          <td>0</td>
          <td>
            <div class="card-list__btn">
              <button type="submit" disabled>Купить</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>